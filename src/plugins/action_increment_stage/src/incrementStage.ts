import { ActionPluginOutput } from '../../types'

type IParameters = {
  applicationId: number
}

module.exports['incrementStage'] = async function (
  parameters: IParameters,
  DBConnect: any
): Promise<ActionPluginOutput> {
  const { applicationId } = parameters
  const returnObject: ActionPluginOutput = { status: null, error_log: '' }
  console.log(`Incrementing the Stage for Application ${applicationId}...`)

  try {
    const templateId: number = await DBConnect.getTemplateIdFromTrigger(
      'application',
      applicationId
    )

    console.log('Getting template Id', templateId)

    const currentStageHistory = await DBConnect.getCurrentStageHistory(applicationId)

    const currentStageHistoryId = currentStageHistory?.stage_history_id
    const currentStageNum = currentStageHistory?.stage_number
    const currentStatus = currentStageHistory?.status

    const nextStage = await DBConnect.getNextStage(templateId, currentStageNum)

    if (!nextStage) {
      console.log('WARNING: Application is already at final stage. No changes made.')
      returnObject.status = 'Success'
      returnObject.error_log = 'Warning: No changes made'
      return returnObject
    }

    if (currentStageHistory) {
      // Make a "Completed" status_history for existing stage_history
      const result = await DBConnect.addNewApplicationStatusHistory(
        currentStageHistoryId,
        'Completed'
      )
      if (!result) {
        returnObject.status = 'Fail'
        returnObject.error_log = "Couldn't create new status"
        return returnObject
      }
    }

    // Create new stage_history
    const newStageHistoryId = await DBConnect.addNewStageHistory(applicationId, nextStage.stage_id)

    // Create new status_history
    const newStatusHistory = await DBConnect.addNewApplicationStatusHistory(
      newStageHistoryId,
      currentStatus ? currentStatus : 'Draft'
    )

    if (!newStageHistoryId || !newStatusHistory) {
      returnObject.status = 'Fail'
      returnObject.error_log = 'Problem creating new stage_history or status_history'
      return returnObject
    }

    returnObject.status = 'Success'
    returnObject.output = {
      applicationId,
      stageNumber: nextStage.stage_number,
      stageName: nextStage.title,
      stageHistoryId: newStageHistoryId,
      statusId: newStatusHistory.id,
      status: newStatusHistory.status,
    }
    console.log(
      `Application ${applicationId} Stage incremented to ${returnObject.output.stageName}. Status: ${returnObject.output.status}`
    )
    return returnObject
  } catch (err) {
    console.log(err.message)
    returnObject.status = 'Fail'
    returnObject.error_log = 'Unable to increment Stage'
    return returnObject
  }
}

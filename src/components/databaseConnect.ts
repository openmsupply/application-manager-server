import PostgresDB from './postgresConnect'
import GraphQLdb from './graphQLConnect'

class DBConnect {
  private static _instance: DBConnect

  constructor() {}

  public static get Instance() {
    return this._instance || (this._instance = new this())
  }

  public query = PostgresDB.query

  public end = PostgresDB.end

  public addActionQueue = PostgresDB.addActionQueue

  public executedActionStatusUpdate = PostgresDB.executedActionStatusUpdate

  public getActionsScheduled = PostgresDB.getActionsScheduled

  public getActionsProcessing = PostgresDB.getActionsProcessing

  public updateActionParametersEvaluated = PostgresDB.updateActionParametersEvaluated

  public resetTrigger = PostgresDB.resetTrigger

  public addFile = PostgresDB.addFile

  public getFile = PostgresDB.getFile

  public addActionPlugin = PostgresDB.addActionPlugin

  public deleteActionPlugin = PostgresDB.deleteActionPlugin

  public getActionPlugins = PostgresDB.getActionPlugins

  public getActionsByTemplateId = PostgresDB.getActionsByTemplateId

  public updateActionPlugin = PostgresDB.updateActionPlugin

  public updateTriggerQueueStatus = PostgresDB.updateTriggerQueueStatus

  public createUser = PostgresDB.createUser

  public isUnique = PostgresDB.isUnique

  public setApplicationOutcome = PostgresDB.setApplicationOutcome

  public getOriginalRecordFromActionQueue = GraphQLdb.getOriginalRecordFromActionQueue

  public getTemplateId = async (tableName: string, record_id: number): Promise<number> => {
    let templateId: number
    switch (tableName) {
      case 'application':
      case 'review':
        templateId = await PostgresDB.getTemplateId(tableName, record_id)
        break
      // TO-DO: Implement these queries once we have more data in database
      // -- will probably be easier using GraphQL
      case 'review_response':
      case 'review_section':
      case 'review_section_assign':
      default:
        throw new Error('Table name not valid')
    }
    return templateId
  }
}

const dbConnectInstance = DBConnect.Instance
export default dbConnectInstance

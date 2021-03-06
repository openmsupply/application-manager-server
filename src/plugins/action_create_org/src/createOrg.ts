module.exports['createOrg'] = async function (org: any, DBConnect: any) {
  try {
    console.log(`\nAdding new organisation: ${org.name}`)
    const result = await DBConnect.createOrg(org)
    if (result.success)
      return {
        status: 'Success',
        error_log: '',
        output: {
          orgId: result.orgId,
          orgName: org.name,
        },
      }
    else
      return {
        status: 'Fail',
        error_log: 'There was a problem creating new organisation.',
      }
  } catch (error) {
    console.log(error.message)
    return {
      status: 'Fail',
      error_log: 'There was a problem creating new organisation.',
    }
  }
}

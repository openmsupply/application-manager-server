import PostgresDB from '../../../components/postgresConnect'

module.exports['createUser'] = function (parameters: any) {
  try {
    console.log('\nAdding new user...')
    PostgresDB.createUser(parameters).then((success) => {
      if (success)
        return {
          status: 'Success',
          error_log: '',
        }
      else
        return {
          status: 'Fail',
          error_log: 'There was a problem creating new user.',
        }
    })
  } catch (error) {
    return {
      status: 'Fail',
      error_log: 'There was a problem creating new user.',
    }
  }
}

import PostgresDB from '../../../components/postgresConnect'

module.exports['createUser'] = async function (user: any) {
  try {
    console.log('\nAdding new user...')
    const success = await PostgresDB.createUser(user)
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
  } catch (error) {
    return {
      status: 'Fail',
      error_log: 'There was a problem creating new user.',
    }
  }
}

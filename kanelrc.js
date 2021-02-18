const path = require('path')

module.exports = {
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'tmf_app_manager',
  },

  preDeleteModelFolder: true,

  customTypeMap: {
    tsvector: 'string',
    bpchar: 'string',
  },

  schemas: [
    {
      name: 'public',
      ignore: ['knex_migrations', 'knex_migrations_lock'],
      modelFolder: path.join(__dirname, 'src', 'models'),
    },
  ],
}

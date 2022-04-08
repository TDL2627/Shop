// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {



  development: {
    client: 'postgresql',
    connection: {
      database: 'knexdb',
      user:     'postgres',
      password: 'uchiha2627'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },



};

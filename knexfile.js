
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './musichistory.db'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'sqlite3',
    connection: {
      database: './musichistory.db',
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: './musichistory.db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

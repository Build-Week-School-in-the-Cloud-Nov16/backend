
require("dotenv").config();

module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './data/sqlite3.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
    
    seeds: { directory: './data/seeds' },
  },
};

const path = require('path');
const parse = require("pg-connection-string").parse;

const { host, port, database, user, password } = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres');

  return {
    connection: {
      client,
      connection: {
        host: env('DATABASE_HOST', host),
        port: env.int('DATABASE_PORT', port),
        database: env('DATABASE_NAME', database),
        user: env('DATABASE_USERNAME', user),
        password: env('DATABASE_PASSWORD', password),
        ssl: {
          rejectUnauthorized: false, // DigitalOcean requires SSL
        },
      },
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};

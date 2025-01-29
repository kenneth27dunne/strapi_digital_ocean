// path: /config/env/production/database.js
module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST'),
        port: parseInt(env('DATABASE_PORT'), 10),
        database: env('DATABASE_NAME'),
        user: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        ssl: {
          rejectUnauthorized: env('DATABASE_SSL_SELF') === 'true',
        },
      },
      debug: false,
    },
  });
  
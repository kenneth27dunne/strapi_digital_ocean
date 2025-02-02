const parse = require("pg-connection-string").parse;

const { host, port, database, user, password } = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
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
    debug: false,
  },
});

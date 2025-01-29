// path: /config/env/production/server.js
module.exports = ({ env }) => ({
    proxy: true,
    url: env('APP_URL'), // Sets the public URL of the application.
    app: {
      keys: env('APP_KEYS') ? env('APP_KEYS').split(',') : [],
    },
  });
  
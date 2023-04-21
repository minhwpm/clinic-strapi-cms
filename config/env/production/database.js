// path: ./config/env/production/database.js

module.exports = ({ env }) => {
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: env("DATABASE_HOST"),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USER', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: { rejectUnauthorized: false },
      },
      debug: false,
    },
  }
};

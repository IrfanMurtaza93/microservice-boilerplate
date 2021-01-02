require("dotenv").config();

const config = {
  development: {
    database: process.env.DBNANME || "authdb",
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "artisan",
    host: process.env.DB_HOST || "postgres",
    dialect: process.env.DB_DIALECT || "postgres",
  },
  staging: {
    database: process.env.DBNANME || "authdb",
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "artisan",
    host: process.env.DB_HOST || "postgres",
    dialect: process.env.DB_DIALECT || "postgres",
  },
  production: {
    database: process.env.DBNANME || "authdb",
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "artisan",
    host: process.env.DB_HOST || "postgres",
    dialect: process.env.DB_DIALECT || "postgres",
  },
};

module.exports = config;

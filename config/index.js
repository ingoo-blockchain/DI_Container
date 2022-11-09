import userController from "../user/user.controller.js";
import userService from "../user/user.service.js";

const register = {
  port: parseInt(process.env.PORT, 10) || 3000,
  logs: {
    level: process.env.LOG_LEVEL || "debug",
  },
  api: {
    prefix: process.env.API_PREFIX || "",
  },
  db: {
    database: process.env.DB_NAME || "databaase",
    username: process.env.DB_USER || "username",
    password: process.env.DB_PASSWORD || "password",
    host: process.env.DB_HOST || "127.0.0.1",
    port: parseInt(process.env.DB_POST) || 3306,
    dialect: process.env.DB_DIALECT || "mysql",
    pool: {
      max: parseInt(process.env.DB_MAX_POOL),
      min: parseInt(process.env.DB_MIN_POOL),
      acquire: 30000,
      idle: 10000,
    },
  },
};

const factory = [userController, userService];
const config = [register, ...factory];

export default config;

import config from "./config/index.js";
import Container from "./lib/Container.js";

const container = new Container(...config);

const userController = container.get("userController");
userController.login();

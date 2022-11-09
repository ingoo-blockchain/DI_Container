import config from "./config/index.js";
import Container from "./lib/Container.js";
import express from "express";

import App from "./app.js";

const container = new Container(...config, App);
container.register("express", express);

// const appConfig = {
//   routes: [container.get("userController")],
//   middelwares: [express.json()],
// };

const app = container.get("App");
app.listen();

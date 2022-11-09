class App {
  app;
  constructor(port, express, userController) {
    this.express = express;
    this.app = this.express();
    this.port = port;
    this.userController = userController;
    this.initializeControllers();
  }

  listen() {
    const callback = () => {
      console.log(`App listening on the port ${this.port}`);
    };
    this.app.listen(this.port, callback);
  }

  initializeControllers() {
    const controller = this.express.Router();
    this.app.use(
      "/user",
      controller.get("/login", (req, res, next) =>
        this.userController.login(req, res, next)
      )
    );
  }
}

export default App;

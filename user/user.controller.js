class userController {
  constructor(userService) {
    this.path = "/user";
    this.userService = userService;
  }

  async login(req, res, next) {
    
    const response = await this.userService.login();
    res.send(response);
  }

  signup(req, res, next) {}
}

export default userController;

class userController {
  constructor(userService) {
    this.userService = userService;
  }

  login(req, res, next) {
    console.log("응답완료", this.userService.login());
    res.send(this.userService.login());
  }
}

export default userController;

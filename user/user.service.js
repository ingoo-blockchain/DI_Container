class userService {
  constructor(userRepository) {
    this.user = userRepository;
  }

  async login() {
    const user = await this.user.getUser("web77221@gmail.com");
    return user;
  }
}

export default userService;

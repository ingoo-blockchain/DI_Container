// module.exports = ({ dbName, tokenSecret }) => {
//   const userService = {}

//   userService.login = () => {
//     console.log(dbName, tokenSecret)
//     return 'hello world!'
//   }

//   return userService
// }

class userService {
  constructor(db) {
    this.db = db;
  }

  login() {
    return "Hello World";
  }
}

export default userService;

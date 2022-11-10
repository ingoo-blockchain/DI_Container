class userRepository {
  constructor(Db) {
    this.mysql = Db;
  }

  async getUser(email) {
    let connection = null;
    try {
      const sql = `
            SELECT * FROM User WHERE email="${email}"
        `;

      connection = await this.mysql.getConnection();
      const [result] = await connection.query(sql);

      connection.release();
      return result;
    } catch (e) {
      connection.release();
      throw new Error(`userRepository getUser() Error...`);
    }
  }
}

export default userRepository;

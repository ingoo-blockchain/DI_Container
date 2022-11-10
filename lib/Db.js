import mysql from "mysql2/promise";

class Db {
  constructor(db) {
    this.database = db.database;
    this.username = db.username;
    this.password = db.password;
    this.host = db.host;
    this.port = db.port;

    return mysql.createPool({
      host: db.host,
      user: db.username,
      password: db.password,
      database: db.database,
      connectTimeout: 10000,
      connectionLimit: 10,
    });
  }
}

export default Db;

import mysql from "mysql";

class Db {
  private connectionLimit: number;
  private host: string;
  private user: string;
  private password: string;
  private dbName: string;

  constructor() {
    this.connectionLimit = 10;
    this.host = process.env.host || "localhost";
    this.user = process.env.host || "root";
    this.password = process.env.password || "";
    this.dbName = process.env.dbName || "blog";
  }

  public start(): any {
    return mysql.createPool({
      connectionLimit: this.connectionLimit,
      host: this.host,
      user: this.user,
      password: this.password,
      database: this.dbName,
    });
  }
}

let db = new Db();

export default db.start();

import mysql from "mysql2"
import account from "./db_config.js"

export default class Connection {
  constructor() {
    this.conn = mysql.createConnection(account)
  }

  query(sql, args) {
    return new Promise((reoslve, reject) => {
      this.conn.query(sql, args, (err, rows) => {
        if (err) return reject(err)
        reoslve(rows)
      })
    })
  }

  close() {
    return new Promise((resolve, reject) => {
      this.conn.end(err => {
        if (err) return reject(err)
        resolve()
      })
    })
  }
}
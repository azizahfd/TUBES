const sqlite3 = require('sqlite3').verbose()
const DB_PATH = './database/data.db';
const mysql = require('mysql')

class User {
    static get(nama, NIM, callback) {
      const db = new sqlite3.Database(DB_PATH);
      // db.get('SELECT * FROM login' , [], (err, row) => {
      //   callback(err, row);
      // });
      db.get('SELECT * FROM login WHERE nama = ? AND NIM = ?', [nama, NIM], (err, row) => {
        callback(err, row);
      });
      db.close();
    }
  }
  
  module.exports = User;
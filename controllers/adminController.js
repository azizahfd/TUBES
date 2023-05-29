const sqlite3 = require('sqlite3').verbose()
const DB_PATH = './database/data.db';

const adminController = {};
const db = new sqlite3.Database('./database/data.db',sqlite3.OPEN_READWRITE,(err)=>{
  if (err) return console.error(err.message);
});

adminController.submit=(req,res)=>{
      //displaying sql data
      let sql = `SELECT * FROM login`;
      db.all(sql, [], (err,rows)=>{
          // if(err) return console.error(err.message);
          res.send(rows);
          let userTemp = [];
          console.log(userTemp);
      });
  }
//     db.get('SELECT * FROM login WHERE nama = ? AND NIM = ?', [nama, NIM], (err, row) => {
//       if(err) return console.error(err.message);
//       res.send(rows);
//       let user = [];
//       console.log(user);
//   });
//       // db.get('SELECT * FROM login' , [], (err, row) => {
//       //     callback(err, row);
// };

module.exports = adminController;


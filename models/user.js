const sqlite3 = require('sqlite3').verbose()
const DB_PATH = './database/data.db';

class User{
    static all(callback){
        const db = new sqlite3.Database(DB_PATH);
        db.all('SELECT * FROM login',[],(err,rows)=>{
            callback(err,rows);
        });
        db.close();
    }

}

module.exports=User;
// dataModel.js

const sqlite3 = require('sqlite3').verbose();

// Fungsi untuk mengambil data dari SQLite database
const fetchDataFromDatabase = () => {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database('pratikum.db', (err) => {
      if (err) {
        console.error(err.message);
        reject(err);
      }
      console.log('Connected to the database.');
    });

    const query = 'SELECT * FROM data';
    db.all(query, [], (err, rows) => {
      if (err) {
        console.error(err.message);
        reject(err);
      }
      resolve(rows);
    });

    db.close((err) => {
      if (err) {
        console.error(err.message);
        reject(err);
      }
      console.log('Closed the database connection.');
    });
  });
};

module.exports = {
  fetchDataFromDatabase,
};

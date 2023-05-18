const express = require('express');
const app = express();
const loginController = require('./controllers/loginController');

// Middleware untuk mengatur parsing body pada request
app.use(express.urlencoded({ extended: true }));

// Rute untuk menampilkan halaman login
app.get('/login', loginController.showLoginForm);

// Rute untuk memproses login
app.post('/login', loginController.processLogin);

// Jalankan server pada port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
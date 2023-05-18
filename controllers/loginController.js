const loginController = {
    showLoginForm: (req, res) => {
      res.render('login');
    },
    processLogin: (req, res) => {
      const { username, password } = req.body;
      // Lakukan verifikasi login sesuai dengan logika bisnis yang Anda inginkan
      // Contoh sederhana:
      if (username === 'admin' && password === 'password') {
        res.send('Login successful!');
      } else {
        res.send('Invalid credentials!');
      }
    }
  };
  
  module.exports = loginController;
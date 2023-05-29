const User = require("..//models/user") ;

const userController = {};

userController.index=(req,res) => {
  res.render('login');
};

userController.submit=(req,res)=>{
  const { nama, NIM } = req.body;
  
  // Periksa apakah username dan password sesuai dengan yang ada di database
  User.get(nama,NIM, (err,user) => {
    // if (err) {
    //   res.status(500).render('error', { message: err.message });
    // } 
    if (user) {
      res.redirect('/dashboard');
    } else {
      res.render('login', { MessageEvent: 'Nama dan NIM tidak benar' });
    }
  });
};

module.exports = userController;
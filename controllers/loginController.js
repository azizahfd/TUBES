const loginController = {};

loginController.index = (req,res)=>{
    res.render('login');
}

module.exports = loginController;
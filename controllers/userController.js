const user = require("..//models/user") ;

const userController = {};

userController.index = (_req,res)=>{
    auser.all((err,rows)=>{
        if(err){
            res.render("eror",{message:err.message})
        } else {
            res.render("login",{users:rows});
        }
        });
    };
userController.submit=(_req,res)=>{
    user.all((_err,_rows)=>{
        if(user){
            res.redirect('/dashboard')
        } else {
            res.render('login',{error:'nama dan NIM tidak benar'})
        }
        });
    };
module.exports = userController;
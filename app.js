const express = require('express');
const app = express();
const loginController = require('./controllers/loginController');

app.set('view engine','html');
app.engine('html',require('ejs').renderFile);

app.use(express.static('public'));

app.get('/',loginController.index);

app.listen(3000,()=>{
    console.log('aplikasi berjalan pada port 3000')
})
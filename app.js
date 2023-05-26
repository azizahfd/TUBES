const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const userController = require('./controllers/userController');
const dashboardController = require('./controllers/dashboardController')

// setup view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')

// Setup static files

app.use(express.static(path.join(__dirname, 'public')));
// Setup body parser
app.use(bodyParser.urlencoded({ extended: false }));

// Routes3
app.get('/', userController.index);
app.post('/login', userController.submit);
app.get('/dashboard', dashboardController.showDashboard);

// Error handling
app.use((req, res, next) => {
res.status(404).render('error', { message: 'Page not found' });
});
app.use((err, req, res, next) => {
res.status(500).render('error', { message: err.message });
});
// Start server
app.listen(3000, () => {
console.log('Server is running on http://localhost:3000');
});



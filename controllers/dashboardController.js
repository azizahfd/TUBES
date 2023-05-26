const user = require("..//models/dashboard") ;

const dashboardController = {};

dashboardController.showDashboard = (req, res) => {
  res.render('dashboard');
};

module.exports = dashboardController;
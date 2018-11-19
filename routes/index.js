const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.render('.',{ message: `Latihan Sequelize Express One to Many` })
});

module.exports = routes;
const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('hello index');
});

module.exports = routes;
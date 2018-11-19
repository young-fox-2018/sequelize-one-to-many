let routes = require('express').Router()

routes.get('/', function(req, res){
    res.send("Teacher-Subject Data!!")
})

module.exports = routes
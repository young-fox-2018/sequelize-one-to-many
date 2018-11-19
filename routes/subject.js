const express = require('express')
const Model = require('../models')
const Router = express.Router()

Router.get('/', (req, res) => {
    Model.Subject.findAll({
        include: [{
            model: Model.Teacher
        }]
    })
        .then(data => {
            res.render('subject', {data})
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = Router
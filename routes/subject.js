const routes = require('express').Router()
const Model = require('../models')
const Subject = Model.Subject

routes.get('/', (req, res) => {
    Subject.findAll({
        include: [{
            model: Model.Teacher
        }]
    })
    .then(data => {
        // res.send(data)
        res.render('subject.ejs', { data })
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = routes
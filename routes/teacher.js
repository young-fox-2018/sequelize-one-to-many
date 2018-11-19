const routes = require('express').Router()
const Model = require('../models')
const Teacher = Model.Teacher

routes.get('/', (req, res) => {
    Teacher.findAll({
        include: [{
            model: Model.Subject
        }]
    })
    .then(data => {
        // res.send(data)
        res.render('teacher.ejs', { data })
    })
    .catch(err => {
        res.send(err)
    })
})

routes.get('/add', (req, res) => {
    res.render('addTeacher.ejs', {msg: req.query.info})
})

routes.post('/add', (req, res) => {
    let obj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    }
    Teacher.create(obj)
        .then(() => {
            res.redirect('/teacher/add?info=Successfully%20add%20data')
        })
        .catch(err => {
            res.redirect(`/teacher/add?info=${err.errors[0].message}`)
        })
})

routes.get('/edit/:id', (req, res) => {
    let id = req.params.id
    res.render('editTeacher.ejs', {id: id})
})

routes.post('/edit/:id', (req, res) => {
    let obj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        SubjectId: req.body.SubjectId
    }
    Teacher.update(obj, {where: {id: req.params.id}})
        .then(() => {
            res.redirect('/teacher')
        })
        .catch(err => {
            res.send(err)
        })
})

routes.get('/delete/:id', (req, res) => {
    let id = req.params.id
    Teacher.destroy({where: {id: id}})
    res.redirect('/teacher')
})

module.exports = routes
const routes = require('express').Router()
const StudentController = require('../controllers/StudentController')

routes.get('/students', (req, res) => { // ---> Menampilkan data students
    StudentController.findAll()
        .then(data => {
            console.log(data.dataValues)
            res.render('listStudents.ejs', { data })
        })
        .catch(err => {
            res.send(err)
        })
})

routes.get('/students/add', (req, res) => { // ----> Create
    res.render('studentsForm.ejs')
})

routes.post('/students/add', (req, res) => {
    StudentController.create(req.body)
        .then(() => {
            res.redirect('/students')
        })
        .catch(err => {
            res.send(err)
        })
})


routes.get('/students/edit/:id', (req, res) => {
    StudentController.findOne(req.params.id)
        .then(students => {
            res.render('formEdit', { students: students })
        })
        .catch(err => {
            res.send(err)
        })
})

routes.post('/students/edit/:id', (req, res) => {
    StudentController.update(req.body, req.params.id)
        .then(() => {
            res.redirect('/students')
        })
        .catch(err => {
            res.send(err)
        })
})

routes.get('/students/delete/:id', (req, res) => {
    StudentController.delete(req.params.id)
    .then(() => {
        res.redirect('/students')
    })
    .catch(err => {
        res.send(err)
    })
})
module.exports = routes
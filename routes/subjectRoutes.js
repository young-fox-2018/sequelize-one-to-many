const routes = require('express').Router()
const SubjectController = require('../controllers/SubjectController')

routes.get('/subjects', SubjectController.findAll)

routes.get('/subjects/add', (req, res) => {
    res.render('formAddSubject')
})

routes.post('/subjects/add', (req, res) => {
    SubjectController.create(req.body)
    .then(() => {
        res.redirect('/subjects')
    })
})

routes.get('/subjects/edit/:id', (req, res) => {
    SubjectController.findOne(req.params.id)
    .then(dataSubjects => {
        res.render('formEditSubject', { dataSubjects })
    })
})

routes.post('/subjects/edit/:id', (req, res) => {
    SubjectController.update(req.body, req.params.id)
    .then(() => {
        res.redirect('/subjects')
    })
})

routes.get('/subjects/delete/:id', (req, res) => {
    SubjectController.delete(req.params.id)
        .then(() => {
            res.redirect('/subjects')
        })
})
module.exports = routes
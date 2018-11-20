const router = require('express').Router()
const Controller = require('../controllers/ControllerTeacher')


router.get('/', (req, res) => {
    Controller.findAll()
        .then(datateachers => {
            // console.log(datateachers)
            res.render('./teachers/index.ejs', { datateachers })
        })
})
router.get('/add', (req, res) => {
    res.render('./teachers/add.ejs', { errors: req.query.errors || null })
})
router.post('/add', (req, res) => {
    let newTeacher = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        SubjectId: req.body.subject
    }
    Controller.add(newTeacher)
        .then(() => {
            res.redirect('/teacher')
        })
        .catch(err => {
            // console.log(err)
            res.redirect('/teacher/add' + '?errors=' + JSON.stringify(err))
        })

})
router.get('/edit/:id', (req, res) => {
    Controller.findById({
        where: {
            id: req.params.id
        }
    })
        .then(teacher => {
            res.render('./teachers/edit.ejs', { teacher })
        })

})
router.post('/edit/:id', (req, res) => {
    let newTeacher = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        SubjectId: req.body.subject
    }
    Controller.update(newTeacher, req.params.id)
        .then(() => {
            res.redirect('/teacher')
        })

})
router.get('/delete/:id', (req, res) => {
    Controller.delete({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            res.redirect('/teacher')
        })

})

module.exports = router
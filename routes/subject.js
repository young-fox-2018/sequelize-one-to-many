const router = require('express').Router()
const Controller = require('../controllers/ControllerSubject')
const ControllerSubjectStudent = require('../controllers/ControllerSubjectStudent')
const helperName = require('../helpers/getFullName')
const helperSubject = require('../helpers/getSubjectName')

router.get('/', (req, res) => {
    Controller.findAll()
        .then(subjects => {
            res.render('./subjects/index.ejs', { subjects })
        })
})

router.get('/add', (req, res) => {
    res.render('./subjects/add.ejs')
})

router.post('/add', (req, res) => {
    let newSubject = {
        subject_name: req.body.subject_name,
        createdAt: new Date,
        upatedAt: new Date
    }
    Controller.add(newSubject)
        .then(() => {
            res.redirect('/subject')
        })
})
router.get('/:id/enrolled-students', (req, res) => {
    ControllerSubjectStudent.findJoin(req.params.id)
        .then(data => {
            res.render('./subjects/enrolledSubject.ejs', { data: data[0].Subject })
        })

})

// router.locals.helperName()
router.get('/:id/give-score', (req, res) => {
    ControllerSubjectStudent.findStudent(Number(req.params.id))
        .then(data => {
            res.render('./subjects/giveScore.ejs', { data })
        })
})
router.post('/:id/give-score', (req, res) => {
    // res.send(req.body)
    let newScore = {
        score: Number(req.body.score)
    }
    ControllerSubjectStudent.updateScore(req.body.StudentId, req.body.SubjectId, newScore)
        .then(() => {
            res.redirect(`/subject/${req.params.id}/enrolled-students`)
        })
})



module.exports = router
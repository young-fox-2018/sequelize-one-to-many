const SubjectController = require('../../controllers/subjectController')
const router = require('express').Router()

router.get('/', SubjectController.findAll)

router.get('/add', SubjectController.renderAddSubject)
router.post('/add', SubjectController.addSubject)

router.get('/delete/:id', SubjectController.deleteSubject)

router.get('/edit/:id', SubjectController.renderEditSubject)
router.post('/edit/:id', SubjectController.editSubject)

module.exports = router
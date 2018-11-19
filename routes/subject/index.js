const subjectRoutes = require('express').Router()
const SubjectController = require('../../controllers/subjectController')

// /subjects
subjectRoutes.get('/', SubjectController.renderSubject)

subjectRoutes.get('/add', SubjectController.renderAddSubjectForm)

subjectRoutes.post('/add', SubjectController.postAddSubject)

subjectRoutes.get('/edit/:subjectId', SubjectController.renderEditSubjectForm)

subjectRoutes.post('/edit/:subjectId', SubjectController.postEditSubject)

subjectRoutes.get('/delete/:subjectId', SubjectController.getDeleteSubject)

module.exports = subjectRoutes
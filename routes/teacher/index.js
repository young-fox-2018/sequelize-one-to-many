const teacherRoutes = require('express').Router()
const TeacherController = require('../../controllers/teacherController')

// /teachers
teacherRoutes.get('/', TeacherController.renderTeacher)

teacherRoutes.get('/add', TeacherController.renderFormAddTeacher)

teacherRoutes.post('/add', TeacherController.postAddTeacher)

teacherRoutes.get('/edit/:teacherId', TeacherController.renderFormEditTeacher)

teacherRoutes.post('/edit/:teacherId', TeacherController.postEditTeacher)

teacherRoutes.get('/delete/:teacherId', TeacherController.getDeleteTeacher)

module.exports = teacherRoutes
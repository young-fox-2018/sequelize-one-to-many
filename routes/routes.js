const routes = require('express').Router()
const studentController = require("../Controllers/studentController")
const teacherController = require("../Controllers/teacherController")
const subjectController = require("../Controllers/subjectController")

// Student Router
routes.get('/', (req,res) => {
        res.render("main.ejs")
})

routes.get('/students', (req,res) => {
        studentController.getAllStudent(req,res)
})

routes.get('/students/add', (req, res) => {
        res.render("addStudent.ejs")
})

routes.post('/students/add', (req, res) => {
        studentController.add(req, res)
})

routes.get('/student/edit/:id', (req,res) => {
        studentController.viewEditStudent(req, res)
})

routes.post('/student/edit/:id', (req, res) => {
        studentController.editStudentPost(req, res)
})

routes.get('/student/delete/:id', (req, res) => {
        studentController.delete(req, res)
})
// Teachers Router
routes.get('/teachers', (req, res) => {
        teacherController.getAllTeacher(req, res)
})

routes.get('/teachers/add', (req, res) => {
        res.render("addTeacher.ejs",  {errors: req.query.error})
})

routes.post('/teachers/add', (req, res) => {
        teacherController.add(req, res)
})

routes.get('/teacher/edit/:id', (req,res) => {
        teacherController.viewEditTeacher(req, res)
})

routes.post('/teacher/edit/:id', (req, res) => {
        teacherController.editTeacherPost(req, res)
})

routes.get('/teacher/delete/:id', (req, res) => {
        teacherController.delete(req, res)
})

// Subject Router

routes.get('/subjects', (req,res) => {
        subjectController.getAllSubject(req,res)
})

routes.get('/subjects/add', (req, res) => {
        res.render("addSubject.ejs")
})

routes.post('/subjects/add', (req, res) => {
        subjectController.add(req, res)
})

module.exports = routes
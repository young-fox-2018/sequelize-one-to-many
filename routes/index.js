const routes = require('express').Router()
const teacherRoutes = require('./teacher/')
const subjectRoutes = require('./subject')

routes.use('/teachers', teacherRoutes)
routes.use('/subjects', subjectRoutes)

module.exports = routes
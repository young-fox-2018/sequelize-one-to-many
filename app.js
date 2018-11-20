"use strict"
const express = require('express')
const app = express()
const subjectRoute = require('./routes/subject.js')
const teacherRoute = require('./routes/teacher.js')
const PORT = 3000

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use('/teacher', teacherRoute)
app.use('/subject', subjectRoute)



app.listen(PORT, function() {
    console.log(`Listen to port: ${PORT}`)
})


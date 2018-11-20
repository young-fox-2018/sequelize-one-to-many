const express = require('express')
const app = express()
const port = 8000
const bodyparser = require('body-parser')
const home = require('./routes/index')
const teacher = require('./routes/teacher')
const student = require('./routes/student')
const subject = require('./routes/subject')


app.set('view-engine', 'ejs')
app.use(bodyparser.urlencoded({ extended: false }))

app.use('/', home)
app.use('/teacher', teacher)
app.use('/student', student)
app.use('/subject', subject)


app.listen(port, () => {
    console.log(`Your application running on port:${port}`)
})



const express = require('express')
const TeacherRoute = require('./routes/teacher')
const SubjectRoute = require('./routes/subject')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.use('/teacher', TeacherRoute)

app.use('/subject', SubjectRoute)

app.get('/*', (req, res) => {
    res.send('page not found. start from /teacher')
})

app.listen(port, () => console.log('Running....'))
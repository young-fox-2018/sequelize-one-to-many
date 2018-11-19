const express = require('express')
const routerIndex = require('./routes/')
const routerTeacher = require('./routes/teacher')
const routerSubject = require('./routes/subject')

const app = express()
const port = 3000


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))

app.use('/teacher', routerTeacher)

app.use('/subject', routerSubject)

app.use('/', routerIndex)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
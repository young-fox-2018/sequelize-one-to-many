const express = require('express')
const bodyParser = require('body-parser');
let app = express()
let Students = require('./routes/studentRoutes')
let Teachers = require('./routes/teacherRoutes')
let Subjects = require('./routes/subjectRoutes')
let port = 3000

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', Students);
app.use('/', Teachers);
app.use('/', Subjects);

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`listening on prt: ${port}`)
})



const express = require('express')
const app = express()
const port = 3000

const teacher = require('./routes/teacher')
const subject = require('./routes/subject')

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: false}))

app.use('/teacher', teacher)
app.use('/subject', subject)

app.listen(port, () => {
    console.log(`running on port ${port}`);
})
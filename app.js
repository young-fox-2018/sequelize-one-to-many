'use strict'
const express = require('express')
let app = express()
const Teacher = require('./routes/teacher')
const Subject = require('./routes/subject')
const route = require('./routes/index')

const port = 3330


app.use(express.urlencoded({ extended: true }))

app.use('/' , route)
app.use('/teacher' , Teacher)
app.use('/subject' , Subject)

app.get('/*' , (req,res) =>{
  res.render('home.ejs')
})

app.listen(port, () => {
  console.log(`App listening to port ${port}`)
})
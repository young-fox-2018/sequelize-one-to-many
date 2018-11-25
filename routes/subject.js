const route = require('express').Router()
const View = require('../Views/view')
const Model = require('../models/index')


route.get('/', (req,res) => {
  Model.Subject.findAll(
    {
      include: [{model:Model.Teacher}]
    }
  )
  .then(data =>{
    // res.send(data[0].Teachers[0].FirstName)
    res.render('subject.ejs' , {data:data})
  })
  .catch(err => {
    res.send(`Error in subject routes findall`)
  })
})

module.exports = route
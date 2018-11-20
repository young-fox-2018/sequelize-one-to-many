const route = require('express').Router()
const Model = require('../models/index')
const Subject = Model.Subject
route.get('/', (req,res) => {
    Subject.findAll()
    .then((data)=>{
        res.render('Subject.ejs',{data:data})
    })
    .catch((err) =>{
        res.send('error di route Subject')
    })
   })

module.exports = route
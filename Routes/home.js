const route = require('express').Router()
route.get('/', (req,res) => {
    res.render('Home.ejs')
   })

module.exports = route
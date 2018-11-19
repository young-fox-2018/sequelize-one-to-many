"use strict"
const routes = require('express').Router()
const Model = require('../models/index')

routes.get('/', (req, res) => {
    Model.Teacher.findAll( {
        include: [{
            model: Model.Subject
        }]
    })
    .then((data) => {
        const result = data.map(element => element.dataValues)
        let obj = {
            title :  'Teacher list',
            data : result,
            query : req.query.result || req.query.error
        }
       
        res.render('../views/teacher', obj)
    })
    .catch((err) => {
        res.redirect('/teachers')
    })
})

routes.get('/edit/:id', (req, res) => {
    Model.Teacher.findOne( {
        where : {
            id: req.params.id
        },
        include:[{
            model: Model.Subject
        }]
    })
    .then((data) => {
        let obj = {
            title : 'Edit Teacher',
            data :data.dataValues
        }

        res.render('../views/teacher/edit', obj)
    })
    .catch((data) => {
        res.redirect('/teacher')
    })
})

routes.post('/edit/:id', (req, res) => {
   Model.Teacher.update( {
       firstName: req.body.firstName,
       lastName : req.body.lastName,
       subjectId : req.body.subjectId
   }, {
       where :  {
            id: req.params.id
       }
   })
   .then((data) => {
       res.redirect('/teacher?result=success')
   })
   .catch((err) => {
    res.redirect('/teacher?result=failed')
   })
})

routes.get('/delete/:id', (req, res) => {
    console.log(req)
    Model.Teacher.destroy( {
        where :  {
             id: req.params.id
        }
    })
    .then((data) => {
        res.redirect('/teacher?result=delete%20success')
    })
    .catch((err) => {
     res.redirect('/teacher?result=delete%20failed')
    })
 })

 routes.get('/create', (req, res) => {
     let obj = {
         title : 'Insert teacher data',
         query : req.query.error
     }
     res.render('../views/teacher/create.ejs', obj)
 })

 routes.post('/create', (req, res) => {
    Model.Teacher.create( {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        subjectId: req.body.subjectId
    })
    .then(data => {
        res.redirect('/teacher?error=success%20add%20user')        
        
    })
    .catch(err => {
        res.redirect(`/teacher/create?error=${err.errors[0].message}`)
    })
})

module.exports = routes
const routes = require('express').Router();
const bodyParser = require('body-parser');
const Model = require('../models')
const Teacher= Model.Teacher

routes.get('/', function(req, res) {
  Teacher.findAll({
    include: [{model: Model.Subject}]
  })
    .then(function(dataTeacher) {
      res.render('teacher',{data: dataTeacher})
    })
    .catch(function(err) {
      res.send(err)
    })
})

routes.get('/add', function(req, res) {
  res.render('add-teacher')
})

routes.post('/add', function(req, res) {
  let obj = {
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    email: req.body.email,
    SubjectId: req.body.subject,
    createdAt: new Date,
    updatedAt: new Date
  }
  Teacher.create(obj)
    .then(function() {
      res.redirect('/teacher')
    })
    .catch(function(err) {
      res.send(err.message)
    })
})

routes.get('/edit/:id', function(req, res) {
  Teacher.findOne({where: {id: req.params.id}})
    .then(function(dataTeacher) {
      res.render('edit-teacher',{data: dataTeacher})
    })
    .catch(function(err) {
      res.send(err)
    })
})

routes.post('/edit/:id', function(req, res) {
  Teacher.findOne({where: {id: req.params.id}})
    .then(function(data) {
      let obj = {
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email: req.body.email,
        SubjectId: req.body.subject,
        createdAt: new Date,
        updatedAt: new Date
      }
      if (data.dataValues.email === req.body.email) {
        delete obj.email
      }
      Teacher.update(obj, {where: {id: req.params.id}})
      .then(function() {
        res.redirect('/teacher')
      })
      .catch(function(err) {
        res.send(err)
      })
    })
})

routes.get('/delete/:id', function(req, res) {
  Teacher.destroy({where: {id: req.params.id}})
    .then(function() {
      res.redirect('/teacher')
    })
    .catch(function(err) {
      res.send(err)
    })
})

module.exports = routes;
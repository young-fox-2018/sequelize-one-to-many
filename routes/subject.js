const routes = require('express').Router();
const bodyParser = require('body-parser');
const Model = require('../models')
const Subject = Model.Subject

routes.get('/', function(req, res) {
  Subject.findAll({
    include: [{model: Model.Teacher}]
  })
    .then(function(dataSubject) {
      res.render('subject',{data: dataSubject})
    })
    .catch(function(err) {
      res.send(err)
    })
})

routes.get('/add', function(req, res) {
  res.render('add-subject')
})

routes.post('/add', function(req, res) {
  let obj = {
    subjectName: req.body.subject,
    createdAt: new Date,
    updatedAt: new Date
  }
  Subject.create(obj)
    .then(function() {
      res.redirect('/subject')
    })
    .catch(function() {
      res.send(err)
    })
})

routes.get('/edit/:id', function(req, res) {
  Subject.findOne({where: {id: req.params.id}})
    .then(function(dataSubject) {
      res.render('edit-subject',{data: dataSubject})
    })
    .catch(function(err) {
      res.send(err)
    })
})

routes.post('/edit/:id', function(req, res) {
  let obj = {
    subjectName: req.body.subject,
    createdAt: new Date,
    updatedAt: new Date
  }
  Subject.update(obj, {where: {id: req.params.id}})
    .then(function() {
      res.redirect('/subject')
    })
    .catch(function(err) {
      res.send(err)
    })
})

routes.get('/delete/:id', function(req, res) {
  Subject.destroy({where: {id: req.params.id}})
    .then(function() {
      res.redirect('/subject')
    })
    .catch(function(err) {
      res.send(err)
    })
})

module.exports = routes;
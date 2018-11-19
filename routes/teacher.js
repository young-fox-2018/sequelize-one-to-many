const express = require('express')
const Model = require('../models')
const Router = express.Router()

Router.get('/', (req, res) => {
    Model.Teacher.findAll({
        include: [{
            model: Model.Subject
        }],
        order: ['id']
    })
        .then(data => {
            data = data.map(e => {
                if (e.Subject) {
                   e.dataValues.Subject = e.Subject.subjectName
                   return e.dataValues
                } else {
                    e.dataValues.Subject = 'unassigned'
                    return e.dataValues
                }
            })
            res.render('teacherTable', {
                data: data,
                info: req.query.info
            })
        })
        .catch(err => {
            res.send(err)
        })
})

Router.get('/add', (req, res) => {
    res.render('form')
})

Router.post('/add', (req, res) => {
    let data = req.body
    Model.Teacher.create({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        SubjectId: data.Subject
    })
    .then(data => {
        res.render('success')
    })
    .catch(err => {
        if(err.message) {
            res.redirect(`/teacher?info='${err.message}`)
        } else {
            res.redirect(`/teacher?info='${err}`)
        }
    })
})

Router.get('/delete/:id', (req, res) => {
    let data = req.params.id
    Model.Teacher.destroy({
        where: {
            id: data
        }
    })
    .then(data => {
        res.redirect("/teacher?info='success delete data'")
    })
    .catch(err => {
        res.redirect(`/teacher?info='${err}`)
    })
})

Router.get('/edit/:id', (req, res) => {
    let data = req.params.id
    res.render('update', {data})
})

Router.post('/edit/:id', (req, res) => {
    let id = req.params.id
    let data = req.body

    Model.Teacher.findOne({
        where: {
            id: id
        }
    })
    .then(deleteData => {
        if(deleteData.email === data.email) {
            delete data.email
        }
        return data
    })
    .then(data => {
        return Model.Teacher.update(data, {
                where: {
                    id: id
                }
            })
    })
    .then(data => {
        res.redirect(`/teacher?info='success edit data`)
    })
    .catch(err => {
        res.redirect(`/teacher?info='${err}`)
    })
    
})

module.exports = Router


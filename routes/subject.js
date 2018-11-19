"use strict"
const routes = require('express').Router()
const Model = require('../models/index')

routes.get('/', (req, resp) => {
    Model.Subject.findAll({
        include: [{
            model: Model.Teacher
        }]
    })
    .then((data) => {
        let result = data.map(element => {
            let obj = {}
            obj.id = element.dataValues.id
            obj.subjectName = element.dataValues.subjectName
            obj.teacher = []
        
            for (let i = 0; i < element.dataValues.Teachers.length; i++) {
                obj.teacher.push(element.dataValues.Teachers[i].dataValues)
            }

            return obj
        })

        let obj = {
            result : result
        }
        
        resp.render('../views/subject', obj)
    })
    .catch((data) => {
        resp.redirect('/subjects')
    })
})

module.exports = routes
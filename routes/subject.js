const routes = require('express').Router();
const Model = require('../models');
const Subject = Model.Subject;

routes.get('/', (req, res) => {
    Subject.findAll({include: [{model: Model.Teacher}]})
    .then(data => {
        let teachers = data.map(element => {
            let teachers = element.Teachers.map(teacher => teacher.firstName + ' ' + teacher.lastName)
            return teachers;
        });
        // res.send(data);
        res.render('subject.ejs', {data: data});
    })
    .catch(err => {
        console.log(err);
    })    
});



module.exports = routes;
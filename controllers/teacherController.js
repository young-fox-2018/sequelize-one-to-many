const Model = require('../models')

class TeacherController {
    static findAll(req, res) {
        Model.Teacher.findAll({
            include: [{
                model: Model.Subject
            }]
        })
            .then(function (teachers) {
                res.render('teacher.ejs', { data: teachers })
            })
            .catch(function (err) {
                res.send(err)
            })
    }
    static renderAddTeacher(req, res) {
        res.render('teacher-add.ejs', { errors: req.query.errors || null })
    }
    static addTeacher(req, res) {
        let dataTeacher = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }
        Model.Teacher.create(dataTeacher)
            .then(function (teacher) {
                res.redirect('/teacher')
            })
            .catch(function (err) {
                res.redirect('/teacher/add' + '?errors=' + JSON.stringify(err))
            })
    }

    static renderEditTeacher(req, res) {
        let dataTeacher = { where: { id: req.params.id } }
        Model.Teacher.findOne(dataTeacher)
            .then(function (teacher) {
                res.render('teacher-edit.ejs', {
                    data: teacher,
                    errors: req.query.errors || null
                })
            })
    }
    static editTeacher(req, res) {
        let dataTeacher = {
            first_name: req.body.first_name,
            last_name: req.body.last_name
        }
        Model.Teacher.update(dataTeacher, { where: { id: req.params.id } })
            .then(function () {
                res.redirect('/teacher')
            })
            .catch(function (err) {
                res.redirect('/teacher/edit/' + req.params.id + '?errors=' + JSON.stringify(err))
            })
    }

    static deleteTeacher(req, res) {
        let dataTeacher = {
            where: {
                id: req.params.id
            }
        }
        Model.Teacher.destroy(dataTeacher)
            .then(function () {
                res.redirect('/teacher')
            })
            .catch(function (err) {
                res.send(err)
            })
    }
}

module.exports = TeacherController
const { Teacher } = require('../models')
const { Subject } = require('../models')

class TeacherController {
    static renderTeacher(req, res) {
        Teacher.findAll({include: Subject, order: [['createdAt', 'ASC']]})
            .then(data => {
                res.render('teachers.ejs', {data})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static renderFormAddTeacher(req, res) {
        Subject.findAll()
            .then(data => {
                res.render('addTeacherForm.ejs', {data: data, error: req.query.error})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static postAddTeacher(req, res) {
        let newTeacher = new Teacher ({
            first_name : req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            SubjectId: Number(req.body.subject)
        })
        console.log(newTeacher)
        newTeacher.save()
            .then(data => {
                res.redirect('/teachers')
            })
            .catch(err => {
                res.redirect('/teachers/add/?error=' + err.errors[0].message)
                // res.send(err.errors[0].message)
            })
    }

    static renderFormEditTeacher(req, res) {
        Promise.all([Teacher.findById(req.params.teacherId, {include: Subject}), Subject.findAll()])
            .then(data => {
                res.render('editTeacherForm.ejs', {data})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static postEditTeacher(req, res) {
        Teacher.findById(req.params.teacherId)
            .then(data => {
                data.first_name = req.body.first_name
                data.last_name = req.body.last_name
                data.email = req.body.email
                data.updatedAt = new Date
                data.SubjectId = req.body.subject
                data.save()
                res.redirect('/teachers')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getDeleteTeacher(req, res) {
        Teacher.destroy({where: {id: req.params.teacherId}})
            .then(data => {
                res.redirect('/teachers')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = TeacherController
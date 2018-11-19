const { Subject } = require('../models')
const { Teacher } = require('../models')

class SubjectController {
    static renderSubject(req, res) {
        Subject.findAll({include: Teacher})
            .then(data => {
                res.render('subjects.ejs', {data})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static renderAddSubjectForm(req, res) {
        res.render('addSubjectForm.ejs')
    }

    static postAddSubject(req, res) {
        Subject.create({subject_name: req.body.subject_name})
            .then(data => {
                res.redirect('/subjects')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static renderEditSubjectForm(req, res) {
        Subject.findById(req.params.subjectId)
            .then(data => {
                res.render('editSubjectForm.ejs', {data})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static postEditSubject(req, res) {
        Subject.findById(req.params.subjectId)
            .then(data => {
                data.subject_name = req.body.subject_name
                data.updatedAt = new Date
                data.save()
                res.redirect('/subjects')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getDeleteSubject(req, res) {
        Subject.destroy({where: {id: req.params.subjectId}})
            .then(data => {
                res.redirect('/subjects')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = SubjectController
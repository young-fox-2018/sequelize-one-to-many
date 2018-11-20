const Model = require('../models')

class SubjectController {
    static findAll(req, res) {
        Model.Subject.findAll({
            include: Model.Teacher
        })
            .then(function (subjects) {
                res.render('subject.ejs', { data: subjects })
            })
            .catch(function (err) {
                res.send(err)
            })
    }
    static renderAddSubject(req, res) {
        res.render('subject-add.ejs', { errors: req.query.errors || null })
    }
    static addSubject(req, res) {
        let dataSubject = {
            subject_name: req.body.subject_name
        }
        Model.Subject.create(dataSubject)
            .then(function () {
                res.redirect('/subject')
            })
            .catch(function (err) {
                res.redirect('/subject/add' + '?errors=' + JSON.stringify(err))
            })
    }
    static deleteSubject(req, res) {
        let dataSubject = {
            where: {
                id: req.params.id
            }
        }
        Model.Subject.destroy(dataSubject)
            .then(function () {
                res.redirect('/subject')
            })
            .catch(function (err) {
                res.send(err)
            })
    }

    static renderEditSubject(req, res) {
        let dataSubject = { where: { id: req.params.id } }
        Model.Subject.findOne(dataSubject)
            .then(function (subject) {
                res.render('subject-edit.ejs', { errors: req.query.errors || null, data: subject })
            })
            .catch(function (err) {
                res.send(err)
            })
    }
    static editSubject(req, res) {
        let dataSubject = {
            subject_name: req.body.subject_name
        }
        Model.Subject.update(dataSubject, { where: { id: req.params.id } })
            .then(function (subject) {
                res.redirect('/subject')
            })
            .catch(function (err) {
                res.redirect('/subject/edit/' + req.params.id + '?errors=' + JSON.stringify(err))
            })
    }
}

module.exports = SubjectController
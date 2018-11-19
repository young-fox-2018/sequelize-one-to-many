const { Teacher, Subject } = require("../models/index")

class teacherController {

    static add(req,res) {
        let newTeacher = new Teacher({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        })
        newTeacher.save()
            .then(function(data) {
                res.redirect("/teachers")
            })
            .catch(function(err) {
                res.redirect(`/teachers/add?error=${err.message}`)
            })
    }

    static getAllTeacher(req, res) {
            Teacher.findAll({
                include: [{
                    model: Subject
                }]  
            })
            .then(function(data) {
                res.render("listTeachers.ejs",{teachers:data})
            })
            .catch(function(err) {
                res.send(err)
            })
    }

    static viewEditTeacher(req, res) {
        Teacher.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function(data) {
            res.render("editTeacher.ejs", {teacher: data.dataValues})
        })
        .catch(function(err) {
            throw err
        })
    }

    static editTeacherPost(req, res) {
        Teacher.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(function(teacher) {
                teacher.first_name = req.body.first_name
                teacher.last_name = req.body.last_name
                teacher.email = req.body.email
                teacher.subject_id = req.body.subject_id
                teacher.save()
                res.redirect("/teachers")
            })
            .catch(function(err) {
                res.send(err)
            })
    }

    static delete(req, res) {
        Teacher.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function() {
            console.log(req.params.id)
            res.redirect("/teachers")
        })
        .catch(function(err) {
            res.send(err)
        })
    }

    

}

module.exports = teacherController
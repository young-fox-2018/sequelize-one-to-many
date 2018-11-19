const {Student} = require("../models/index")

class studentController {
    static add(req,res) {
        let newStudent = new Student({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        })
        newStudent.save()
            .then(function(data) {
                console.log(`Successfully add new data`)
                res.redirect("/")
            })
            .catch(function(err) {
                throw err
            })
    }
    static getAllStudent(req, res) {
        Student.findAll()
            .then(function(data) {
                res.render("listStudents.ejs",{students:data})
            })
            .catch(function(err) {
                throw err
            })
    } 
    static viewEditStudent(req, res) {
        Student.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function(data) {
            res.render("editStudent.ejs", {student: data.dataValues})
        })
        .catch(function(err) {
            throw err
        })
    }
    static editStudentPost(req, res) {
        Student.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(function(student) {
                student.first_name = req.body.first_name
                student.last_name = req.body.last_name
                student.email = req.body.email
                student.save()
                res.redirect("/students")
            })
            .catch(function(err) {
                throw err
            })
    }
    static delete(req, res) {
        Student.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function() {
            res.redirect("/students")
        })
        .catch(function(err) {
            res.send(err)
        })
    }
}



module.exports = studentController
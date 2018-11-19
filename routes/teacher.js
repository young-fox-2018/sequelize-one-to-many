let route = require(`express`).Router()
let bodyParser = require(`body-parser`)
let Model = require(`../models/`)
let Teacher = Model.Teacher

//DISPLAY ALL
route.get(`/`, function (req, res) {
    Teacher.findAll({
        include: [{
            model: Model.Subject
        }]
    }).then((result) => {
        // res.send(result)
        res.render(`teacher.ejs`, { result: result })
    }).catch((err) => {
        res.send(err)
    });
})

//EDIT
route.get(`/edit/:id`, function (req, res) {
    res.render(`./edit/editTeacher.ejs`, {
        id: req.params.id
    })
})

route.post(`/executeEdit/:id`, function (req, res) {
    let string = 1
    Teacher.findOne({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        let obj = {
            firstName: req.body.first_name,
            lastName: req.body.last_name,
            subjectId: req.body.subjectId,
            email: req.body.email
        }
        if (result.dataValues.email == req.body.email) {
            delete obj["email"]
        }

        Teacher.update(obj, {
            where: {
                id: req.params.id
            }
        }).then((result) => {
            res.redirect(`/teacher`)
        }).catch((err) => {
            res.send(err)
        });
    }).catch((err) => {
        res.send(err)
    });

})

//DELETE
route.get(`/delete/:id`, function (req, res) {
    Teacher.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.redirect(`/teacher`)
    }).catch((err) => {
        res.send(err)
    });
})

//ADD
route.get(`/add`, function (req, res) {
    res.render(`./add/addTeacher.ejs`)
})

route.post(`/add`, function (req, res) {
    Teacher.create({
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        SubjectId: req.body.subjectId,
        email: req.body.email
    }).then((result) => {
        res.redirect(`/teacher`)
    }).catch((err) => {
        if (err.message = "DUPLIKAT") {
            res.send("EMAIL DUPLIKAT ATAU EMAIL TIDAK VALID")
        }
    });
})





module.exports = route
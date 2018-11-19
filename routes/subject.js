let route = require(`express`).Router()
let bodyParser = require(`body-parser`)
let Model = require(`../models`)
let Subject = Model.Subject

route.use(bodyParser.json())
route.use(bodyParser.urlencoded({ extended: true }))

//DISPLAY ALL
route.get(`/`, function (req, res) {
    Subject.findAll({
        include: [{
            model: Model.Teacher
        }]
    }).then((result) => {
        res.render(`subject.ejs`, {
            result: result
        })
        // res.send(result)
    }).catch((err) => {
        res.send(err)
    });
})

//ADD
route.get(`/add`, function(req, res) {
    res.render(`./add/addSubject.ejs`)
})

route.post(`/add`, function(req, res) {
    Subject.create({
        subjectName: req.body.subject_name
    }).then((result) => {
        res.redirect(`/subject`)
    }).catch((err) => {
        if (err.type = "Validation Error") {
            res.send("EMAIL GAK VALID")
        }
    });
})

//EDIT
route.get(`/edit/:id`, function (req, res) {
    res.render(`./edit/editSubject.ejs`, {
        id: req.params.id
    })
})

route.post(`/executeEdit/:id`, function (req, res) {
    Subject.update({
        subjectName: req.body.subject_name,
    }, {
            where: {
                id: req.params.id
            }
        }).then((result) => {
            res.redirect(`/subject`)
        }).catch((err) => {
            res.send(err)
        });
})

//DELETE
route.get(`/delete/:id`, function (req, res) {
    Subject.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.redirect(`/subject`)
    }).catch((err) => {
        res.send(err)
    });
})





module.exports = route
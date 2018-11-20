
const express = require("express");
const router = express.Router();
const Model = require("../models")
// const Subject = Model.Subject

router.get("/", (req, res) => {
    Model.Teacher.findAll({
        include: [{
            model: Model.Subject
        }],
        order: ["id"]
    })
    .then(data => {
        res.render("teachers.ejs", {data})
    }).catch(err => {
        res.send(err)
    })
})

router.get("/add", (req, res)=> {
    res.render("addTeacher")
})

router.post("/add", (req, res) => {
    let obj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        subjectId: req.body.subjectId
    }

    Model.Teacher.create(obj)
    .then(data => {
        res.redirect("/teachers")
    })
    .catch(err => {
        res.send("Error while adding new data")
    })
})

module.exports = router
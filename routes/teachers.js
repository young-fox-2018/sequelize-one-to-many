
const express = require("express");
const router = express.Router();
const Model = require("../models")
// const Subject = Model.Subject

router.get("/", (req, res) => {
    Model.Teacher.findAll({
        include: [{
            model: Model.Subject
        }]
    })
    .then(data => {
        res.render("teachers.ejs", {data:data})
        // res.send(data)
    }).catch(err => {
        res.send(err)
    })
})

router.get("/home/addTeacher", (req, res)=>{
    res.render("addTeacher")
})

router.post("/", (req, res) => {
    Model.Teacher.crete()
        let obj = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        }
})

module.exports = router
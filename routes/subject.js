
const express = require("express");
const router = express.Router();
const Model = require("../models");
const Subject = Model.Subject;

router.get("/", (req, res)=>{
    Subject.findAll({
        include: [{
            model: Model.Teacher
        }]
    }).then(data => {
        res.render("subject", {data:data})
        // res.send(data)
    }).catch(err => {
        res.send(err)
    })
})

module.exports = router
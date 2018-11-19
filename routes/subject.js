const express = require("express")
const routes = express.Router()
const Model = require("../models")

routes.get("/",function(req,res){
    // res.send("ini di subject")
    Model.Subject.findAll({
        include:[{
            model: Model.Teacher
        }]
    })
    .then(data=>{
        res.render("subject.ejs",{
            data:data
        })
        // res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
})

module.exports = routes
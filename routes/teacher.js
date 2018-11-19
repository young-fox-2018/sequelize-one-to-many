const express = require("express")
const routes = express.Router()
const Model = require("../models")

routes.get("/",function(req,res){
    // res.send("ini di /teacher")
    req.query.info

    Model.Teacher.findAll({
        include:[{
            model: Model.Subject
        }]
    })
    .then(data=>{
        res.render("teacher.ejs",{
            data:data,
            msg: req.query.info
        })
        // res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
})

routes.get("/edit/:id",function(req,res){
    // res.send("masuk teacher/edit")
    let id = req.params.id
    Model.Teacher.findById(id)
    .then(data=>{
        // res.send(data)
        res.render("editTeacher.ejs",{data : data})
    })
    .catch(err=>{
        res.send(err)
    })
})

routes.post("/edit/:id",function(req,res){
    let id = req.params.id
    let data2 = req.body
    // console.log(id+"====",data)
    Model.Teacher.findById(id)
    .then(data=>{
        let obj = {
            first_name : data2.first_name,
            last_name : data2.last_name,
            email: data2.email,
            SubjectId: Number(data2.SubjectId),
            createdAt: new Date(),
            updatedAt: new Date()
        }
        if(data.dataValues.email === obj.email){
            delete obj.email
        }
        Model.Teacher.update(obj,{
            where:{
                id
            }
        })
        .then(data=>{
            if(data){
                res.redirect("/teacher")
            }
        })
    })
    .catch(err=>{  
        res.send(err)
    })
})

routes.get("/delete/:id",function(req,res){
    // res.send("masuk delete")
    let id = req.params.id
    Model.Teacher.destroy({
        where:{
            id
        }
    })
    .then(()=>{
        res.redirect("/teacher")
    })
    .catch(err=>{
        res.send(err)
    })
})

routes.post("/",function(req,res){
    let data = req.body
    // console.log(data)
    let obj = {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        SubjectId: null,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    Model.Teacher.create(obj)
    .then(data=>{
        res.redirect("/teacher?info=success%20add%20data")
    })
    .catch(err=>{
        res.redirect(`/teacher?info=${err.errors[0].message}`)
    })
})
module.exports = routes
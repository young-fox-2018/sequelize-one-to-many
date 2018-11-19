const routes = require('express').Router();
const Model = require("../models/index");

routes.get("/", (req,res) =>{

    Model.Teacher.findAll({
        include:[{
            model: Model.Subject
        }]
    })
    .then(data =>{
        obj = data.map(element =>{
            let row ={
                id: element.id,
                first_name: element.first_name,
                last_name: element.last_name,
                subject: element.Subject.subject_name,
            }

            return row
        })
        let input = {
            data: obj
        }
        res.render("./pages/teacher.ejs",input)
        // res.send(input)
    })
    .catch(err =>{
        console.log(err)
        res.send(err)
    })
})

routes.get("/add", (req,res) =>{
    res.render("./pages/addTeacher.ejs")
})

routes.post("/add", (req,res) =>{
    // res.send(req.body)
    Model.Teacher.create(req.body)
        .then(() => 
        res.redirect("/teacher"))
        .catch((err)=>
        res.send(err))
})

routes.get("/edit/:id", (req,res) =>{
    Model.Teacher.findOne({
        where:{
            id: req.params.id
        }
    })
    .then(data =>{
        let input={
            data:data
        }
        // res.send(input)
        res.render("./pages/editTeacher.ejs",input)
    })
    .catch(err =>{
        res.send(err)
    })
})

routes.post("/edit/:id", (req,res) =>{
    Model.Teacher.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        SubjectId: req.body.SubjectId
    },{
        where:
        {
            id:req.params.id
        }
    })
    .then(() =>{
        res.redirect("/")
    })
    .catch((err) =>{
        res.send(err)
    })
    // res.send(req.body)
})

module.exports = routes
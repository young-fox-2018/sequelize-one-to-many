const routes = require('express').Router();
const Model = require("../models/index");

routes.get("/",(req,res) =>{
    Model.Subject.findAll({
        include:[{
            model: Model.Teacher
        }]
    })
    .then((data) =>{
        let obj = data.map(element =>{
            let row = {
                id : element.id,
                Subject_Name: element.subject_name,
                Teachers: element.Teachers.map(element=>{
                    let fullName = element.first_name + " " + element.last_name
                    return fullName
                })
            }

            return row
        })

        let input ={
            data: obj
        }

        // res.send(input)

        res.render("./pages/subject.ejs", input)
    })
})

module.exports = routes
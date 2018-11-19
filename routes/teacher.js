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
        res.send(err)
    })
})

module.exports = routes
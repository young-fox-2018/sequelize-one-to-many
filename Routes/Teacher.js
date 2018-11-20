const route = require('express').Router()
const Model = require('../models/index')
const Teacher = Model.Teacher
route.get('/', (req,res) => {
   Teacher.findAll()
    .then((data)=>{
        res.render('Teacher.ejs',{data:data})
    })
    .catch((err) =>{
        res.send('error di route Teacher')
    })
})
route.get('/edit/:id',(req,res)=>{
    const id = req.params.id
    res.render("Edit.ejs",{id:id})
    
})
route.post('/edit/:id',(req,res)=>{
    let obj = req.body
    if(obj.firstname === "" || obj.firstname === undefined){
        res.send('please input you first name')
    }else if(obj.lastname === "" || obj.lastname === undefined){
        res.send('please input your last name')
    }else if(obj.email === "" || obj.email === undefined){
        res.send('plase input your email')
    }else{
        let data = {
            firs_Name : obj.firstname,
            Last_Name :obj.lastname,
            Email:obj.email,
            Subjectid: obj.Subjectid
        }
        Teacher.update(obj,{where:{
            id:req.params.id
        }})
        .then((data) => {

        })
        .catch((err)=>{
            res.send(`error di updated teacher`)
        })
    }
})
module.exports = route
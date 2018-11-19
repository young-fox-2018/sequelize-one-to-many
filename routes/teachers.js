const routes = require('express').Router()
const tController = require('../controllers/tController')
const sbController = require('../controllers/sbController')
const View = require('../views/view')


routes.get("/", function(req, res){
    tController.allTeachers()
    .then(teacherList =>{
        let all = teacherList.map(teachers => teachers.dataValues)
        // res.send(typeof req.query.errInfo)
        res.render("allTeachers.ejs", {teachersAll: all})
    })
    .catch(err => {
        View.displayError(
            {
                Message: "Errornya di routes.get allTeachers",
                Details: err
            }
        )
    })
})

routes.get("/add", function(req, res){
    res.render("teachersAdd.ejs", {errDeets: req.query.errInfo})
})

routes.post("/add", function(req, res){
    tController.addTeacher(req.body)
     .then(data => {
         res.render("teacherSaved.ejs", {dataSaved: data.dataValues})
     })
     .catch(err => {
         res.redirect(`/teachers/add?errInfo=${err.errors[0].message}`)
     })
})

routes.get("/edit/:id", function(req, res){
    let params = req.params
    let id = params.id
    
    sbController.allSubjects()
     .then(data => {
         let subjects = data.map(subject => subject.subjectName)
        //  res.send(subjects)
        tController.findTeacher(id)
        .then(teacher => {
            res.render("teachersEdit.ejs", {sbData: subjects, tData: teacher.dataValues, errDeets: req.query.errInfo})
        })
     })
     .catch(err => {
         res.render("teachersEdit.ejs", {errDeets: err})
     })
})

routes.post("/edit/:id", function(req, res){
    let params = req.params
    let id = params.id

    tController.updateTeacher(req.body, id)
    .then( () => {
        res.redirect("/teachers")
    })
    .catch(err =>{
        // res.send(err.errors[0].message)
        res.redirect(`/teachers/edit/${id}?errInfo=${err.errors[0].message}`
        )
    })
})

// routes.get("/delete/:id", function(req,res){
//     let params = req.params
//     let id = params.id

//     tController.deleteTeacher(id)
//     .then( data => {
//         if(!data){
//             View.displayError("Data not found")
//             res.redirect('/teachers')
//         }
//         else{
//             View.displayError("Data is deleted!")
//             res.redirect('/teachers')

//         }
//     })
//     .catch( err => View.displayError(
//         {
//             Message: "Errornya di routes.get deleteTeacher",
//             Details: err
//         })
//     )
// })
module.exports = routes
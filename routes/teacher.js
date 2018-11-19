var express = require('express');
var router = express.Router();
const model = require('../models')
const teacher = model.Teacher
const subject = model.Subject
const flash = require('express-flash-notification');


router.get('/', function(req, res){
      teacher
        .findAll({
            include: [{
                    model: subject,
                    }],
            order: [ ['id', 'ASC'] ]
        })
        .then(success=>{
            res.render('./teacher.ejs',{
                dataTeacher: success
            });
        })
        .catch((err) => {
          res.send(err)
        })
});

router.get('/edit/:id', function(req, res){
    const id = req.params.id
    teacher.findById(id)
    .then(success=>{
        res.render('./editTeacher',{
            detailTeacher : success
        });
    })
})

router.post('/edit/:id', function(req, res){
     const id = req.params.id
    teacher.findOne({where: {
      email: req.body.email
    }})
    .then(newData => {
        
        const input = {
            firstName : req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            SubjectId: req.body.SubjectId,
            updatedATt: new Date()
        }
        
        if(newData.email === input.email) { 
            delete input.email
        }
        
        teacher.update(input,{where: {id}})
        .then(success=>{
            res.redirect('/teacher')
        })
    })
    .catch(err=>{
        res.send(err)
    })
});

router.get('/add', function(req,res){
    // res.send(req.query)
    let input = {
        info: req.query.info
    }
    res.render('./addTeacher', input)
})

router.post('/add', function(req,res){
    teacher.create({
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        email: req.body.email
    })
    .then(success => {
        res.redirect('/teacher')
    })
    .catch(err => {
        res.redirect(`./add?info=${err.errors}`)
    })
})

router.get('/delete/:id', function(req,res){
  const id = req.params.id
  teacher.destroy({
    where:{id}
  })
  .then(success=>{
    res.redirect('/teacher')
  })
})

//export this router to use in our index.js
module.exports = router;
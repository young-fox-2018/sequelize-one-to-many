const route = require('express').Router()
const View = require('../Views/view')
const Model = require('../models/index')


route.get('/', (req,res) => {
  Model.Teacher.findAll(  {
    include: [{model:Model.Subject}]
  })
    .then(data => {
      // res.send(data)
      res.render('teacher.ejs' , {data:data})
    })
    .catch(err => {
      res.send(`Error in teacher routes findall`)
    })
})

route.get('/edit/:id' , (req,res) => {
  res.render('edit.ejs')
})


route.post('/edit/:id', (req,res) => {
  let obj = req.body
    if(obj.FirstName == '' || obj.FirstName == undefined){
    res.send(`Please fill first name!`)
  } else if (obj.LastName == '' || obj.LastName == undefined) {
    res.send(`Please fill last name!`)
  } else if(obj.email == '' || obj.email == undefined) {
    res.send(`Please fill email!`)
  } else {
    Model.Teacher.update({
      FirstName : obj.FirstName, 
      LastName : obj.LastName,
      email : obj.email,
      SubjectId: obj.SubjectId
    }, {
        where:{
          id: req.params.id
        }
    })
    .then(data => {
      //kenapa g bisa di slas aja kenapa harus ada teacher
      res.redirect('/teacher')
    })
    .catch(err => {
      res.send(`Error in edit teacher route`)
    })
  }
})

route.get('/delete/:id' , (req,res) =>{
  // res.send('masuk sini')
  Model.Teacher.destroy({where:{id:req.params.id}})
    .then(data =>{
      res.redirect('/teacher')
    })
    .catch(err=> {
      res.send(`error deleting data`)
    })

})

route.get('/add' , (req,res) => {
  res.render('add.ejs')
})

route.post('/add' , (req,res) => {
  let obj = req.body
  Model.Teacher.create({
    FirstName : obj.FirstName, 
      LastName : obj.LastName,
      email : obj.email,
      SubjectId: obj.SubjectId
  })
  .then(data => {
    res.redirect('/teacher')

  })
  .catch(err => {
    res.send(`Err di add data Teacher`)
  })
})


module.exports = route
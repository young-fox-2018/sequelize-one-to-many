const express = require('express')
const router = express.Router()
const Model = require('../models/')

router.get('/', (req, res) => {
    Model.Teacher.findAll({
        include: [{
            model: Model.Subject
        }]
    })
        .then(data => {
            res.render('teachers', {data: data})
        })
        .catch(err => {
            res.send(err)
        })
})

router.get('/add', (req, res) => {
    if (req.query.errors){
        let query = JSON.parse(req.query.errors)
    
        res.render('teacherAdd.ejs', {error: query.errors})
    } else {
        res.render('teacherAdd.ejs', {error: null})
    }
})

router.post('/add', (req, res) => {
    Model.Teacher.create(req.body)
        .then((data) => {
            res.redirect('/teacher')
        }).catch((err) => {
            //res.send(err)
            res.redirect('/teacher/add?errors=' + JSON.stringify(err))
        });
})

router.get('/delete/:id', (req, res) => {
    Model.Teacher.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(data => {
            if (data) {
                res.redirect('/teacher')
            } else {
                res.send(`Id ${req.params.id} not found`)
            }
        })
        .catch(err => {
            res.send(err)
        })
})

router.get('/edit/:id', (req, res) => {
    

    Model.Teacher.findOne({
        where:{
            id: req.params.id
        }
    })
        .then((data) => {

            if (req.query.errors){
                let query = JSON.parse(req.query.errors)
            
                res.render('teacherEdit.ejs', {
                    data: data,
                    error: query.errors
                })
            } else {
                res.render('teacherEdit.ejs', {
                    data: data,
                    error: null
                })
            }
            // res.render('teacherEdit.ejs', {
            //     data: data,
            //     error: null
            // })
        }).catch((err) => {
            res.send(err)
        });
})

router.post('/edit/:id', (req, res) => {
    let dataEdit = req.body
    Model.Teacher.findOne({
        where: {
            id: req.params.id
        }
    })
        .then((data) => {
            if (dataEdit.email === data.email) {
                delete dataEdit.email
            }
            return dataEdit
        })
        .then((data) => {
            return Model.Teacher.update(data, {
                where: {
                    id: req.params.id
                }
            })
        })
        .then((data) => {
            res.redirect('/teacher')
        })
        .catch((err) => {

            res.redirect('/teacher/edit/'+req.params.id+'?errors='+JSON.stringify(err))
        });

})


module.exports = router
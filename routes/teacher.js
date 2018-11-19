const routes = require('express').Router();
const TeacherController = require('../controllers/TeacherController');
const SubjectController = require('../controllers/SubjectController');

routes.get('/', (req, res) => {
    TeacherController.getAllTeachers()
    .then(data => {
        // res.send(data)
        res.render('teacher.ejs', {data: data});
    })
    .catch(err => {
        res.render('404error.ejs');
    });
});

routes.get('/add', (req, res) => {
    res.render('add.ejs', {data: 'Teacher'});
})

routes.post('/', (req, res) => {
    TeacherController.addTeacher(req.body)
    .then(data => {
        res.redirect('/teacher');
    })
    .catch(err => {
        res.render(err);
    })
});

routes.get('/edit/:id', (req, res) => {
    let params = req.params;
    let id = params.id;
    SubjectController.getAllSubjects()
    .then(data => {
        let subject = data.map(each => each.subjectName); 
        
        TeacherController.findTeacher(id)
        .then(teacher => {
            res.render("edit.ejs", {
                data: teacher.dataValues, title: 'Teacher', subjects: subject, errors: req.query.errInfo}); 
        })
    })
    .catch(err => {
        res.render('404error.ejs');
    })
});

routes.post('/edit/:id', (req, res) => {
    let params = req.params;
    let id = params.id;
    
    TeacherController.updateTeacher(id, req.body)
    .then(data => {    
        res.redirect('/teacher');
    })
    .catch(err => {
        let errors = err.errors.map(error => error.message);        
        // res.send(errors);
        res.redirect(`/teacher/edit/${id}?errInfo=${errors[0]}`);        
    });
});

routes.get('/delete/:id', (req, res) => {
    let params = req.params;
    let id = params.id;

    TeacherController.deleteTeacher(id)
    .then(data => {
        if(data) {            
            res.redirect('/teacher?info=success');
        } else {            
            res.redirect('/teacher?info=fail');
        }
    })
    .catch(err => {
        res.send(err);
    })
});


module.exports = routes;
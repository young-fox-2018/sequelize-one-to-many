var express = require('express');
var router = express.Router();
const model = require('../models')
const teacher = model.Teacher
const subject = model.Subject
const helper = require('../helpers/')

router.get('/', function(req, res){
      subject
        .findAll({
            include: [{
                    model: teacher,
                    }],
            order: [ ['id', 'ASC'] ]
        })
        .then(success=>{
            // res.send(success)    
            res.render('./subject.ejs',{
                dataSubject: success,
                helper: helper
            });
        })
        .catch((err) => {
          res.send(err)
        })
});



//export this router to use in our index.js
module.exports = router;
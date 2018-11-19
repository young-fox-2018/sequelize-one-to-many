var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('./index.ejs');
});
router.post('/', function(req, res){
    res.render('./index.ejs');
});



//export this router to use in our index.js
module.exports = router;
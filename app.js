const express = require('express');
const app = express();
const home = require('./routes')
const teacher = require('./routes/teacher')
const subject = require('./routes/subject')
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs');

app.use('/', home);
app.use('/teacher', teacher)
app.use('/subject', subject)

app.use('/*', function(req,res){
    res.render('./error.ejs');
})


app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
  });
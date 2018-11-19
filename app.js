const express = require('express');
const app = express();
const home = require('./routes');
const subject = require('./routes/subject');
const teacher = require('./routes/teacher');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.use('/', home);
app.use('/subject', subject);
app.use('/teacher', teacher);
app.use(express.static(__dirname + '/views'));

app.get('/*', (req, res) => {
    res.render('404error.ejs');
})

app.listen(3000, () => {
    console.log(`Server running on port 3000...`);
});
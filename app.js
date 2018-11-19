const express = require(`express`)
const app = express()
const bodyParser = require(`body-parser`)
const PORT = 3000
let subject = require(`./routes/subject`)
let teacher = require(`./routes/teacher`)

//VIEW ENGINE
app.set(`view engine`, `ejs`)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//BUAT CSS BIAR GAK ERROR
app.use(express.static(__dirname + '/public'));

app.get(`/`, function(req,res) {
    res.send(`TEST`)
})

//MAIN DIRECTORY
app.use(`/subject`, subject)
app.use(`/teacher`, teacher)

//LISTEN TO PORT
app.listen(PORT, function() {
    console.log(`Listening to port: ${PORT}`);
})


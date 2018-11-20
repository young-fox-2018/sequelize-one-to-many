const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const router = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', router)

app.listen(port, function () {
    console.log(`Listening on port ${port}`)
})
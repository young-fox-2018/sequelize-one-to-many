const app = require("express")();
const url_encoded = require("express").urlencoded()
const routes = require("./routes/routes")
const port = 3000

app.set('view engine', 'ejs')
app.use(url_encoded)
app.use('/', routes)

app.listen(port, () => {
        console.log(`Listening on port ${port}`)
})



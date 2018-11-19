const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const indexRoutes = require("./routes/index")
const port = 3000

app.set("view engine", "ejs")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({}))
app.use("/", indexRoutes)

app.listen(port, () => {
    console.log("listen on port " + 3000);

})



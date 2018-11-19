const express = require("express")
const routes = require("./routes/index.js")
const app = express()
const port = 3000

app.set("view engine","ejs")

app.use("/",routes)

app.use("/*",function(req,res){
    res.send("page not found")
})

app.listen(port,function(){
    console.log(`app is running on port: ${port}`)
})


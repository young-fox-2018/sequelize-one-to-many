const express = require("express")
const routes = express.Router()

routes.use(express.json())
routes.use(express.urlencoded({ extended: true }))

const teacherRoutes = require("./teacher.js")
const subjectRoutes = require("./subject.js")

routes.get("/",function(req,res){
    res.send("HOMEPAGE")
})

routes.use("/teacher",teacherRoutes)
routes.use("/subject",subjectRoutes)



module.exports = routes
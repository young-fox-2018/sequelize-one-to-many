const routes = require('express').Router();
const teacherRoutes = require("./teacher");

routes.get("/", (req,res) =>{
    // res.render("index.ejs",{input: "apa ya ini"})
    res.send("mantap")
})
routes.use("/teacher", teacherRoutes)



module.exports = routes;
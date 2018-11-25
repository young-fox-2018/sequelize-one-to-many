const routes = require('express').Router();
const teacherRoutes = require("./teacher");
const subjectRoutes = require("./subject");

routes.get("/", (req,res) =>{
    // res.render("index.ejs",{input: "apa ya ini"})
    res.send("mantap")
})
routes.use("/teacher", teacherRoutes)

routes.use("/subject", subjectRoutes)



module.exports = routes;
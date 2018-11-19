const router = require("express").Router()
const Controller = require("../../controllers/teacherContoller.js")

router.get("/", (req, res) => {
    console.log("dataMasuk");

    Controller.allData()
        .then((teacherData) => {
            res.render("teacher.ejs", { teacherData })
        })
})
router.get("/add", (req, res) => {
    res.render("addTeacher.ejs", { error: req.query.error || null })
})
router.post("/add", (req, res) => {
    let data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        subjectId: Number(req.body.subject)
    }
    Controller.addData(data)
        .then(() => {
            res.redirect("/teacher")
        })
        .catch((err) => {
            res.redirect("/teacher/add" + "?error=" + JSON.stringify(err))
        })
})

module.exports = router
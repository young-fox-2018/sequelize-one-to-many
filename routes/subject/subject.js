const router = require("express").Router()
const Controller = require("../../controllers/subjectController")

router.get("/", (req, res) => {
    Controller.findAll()
        .then((subjectData) => {
            // res.send(subjectData)
            res.render("subject.ejs", { subjectData })
        })

})
module.exports = router
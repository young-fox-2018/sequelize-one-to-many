const router = require("express").Router()
const teacher = require("./teacher/teacher.js")
const subject = require("./subject/subject.js")

router.get("/", (req, res) => {
    res.render("index.ejs")
})
router.use("/teacher", teacher)
router.use("/subject", subject)

module.exports = router
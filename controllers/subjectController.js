const { Teacher } = require("../models/index.js")
const { Subject } = require("../models/index.js")

class SubjectController {
    static findAll() {
        return Subject.findAll({
            include: Teacher
        })


    }
}
module.exports = SubjectController
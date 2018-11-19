const { Teacher } = require("../models/index.js")
const { Subject } = require("../models/index.js")

class TecherController {
    static allData() {
        return Teacher.findAll({
            include: [{
                model: Subject
            }]
        })
    }
    static addData(data) {
        return Teacher.create(data)
    }
}
module.exports = TecherController
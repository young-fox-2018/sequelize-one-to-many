const { Subject } = require('../models/index')
const { Teacher } = require('../models/index')


class Controller {
    static findAll() {
        return Subject.findAll({
            include: [{
                model: Teacher
            }]
        })
    }
    static add(newSubject) {
        return Subject.create(newSubject)
    }


}

module.exports = Controller
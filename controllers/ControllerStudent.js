const { Student } = require('../models/index')

class ControllerStudent {
    static findAll() {
        return Student.findAll({
            order: [['id', 'ASC']]
        })
    }
    static add(newStudent) {
        Student.create(newStudent)

    }
    static findById(id) {
        return Student.findOne(id)
    }
    static edit(newStudent, id) {
        return Student.update(newStudent, {
            where: { id: id }
        })
    }
    static delete(id) {
        return Student.destroy({
            where: {
                id: id
            }
        })
    }


}

module.exports = ControllerStudent
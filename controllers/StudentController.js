const {Student} = require('../models')

class StudentController {
    static findAll() {
        return Student.findAll()
    }
    static findOne(id) {
        return Student.findOne({
            where: {
                id: id
            }
        })        
    }
    static create(params) {
        return Student.create({
            first_name: params.first_name,
            last_name: params.last_name,
            email: params.email
        })
    }
    static update(params, id) {
        return Student.update({
            first_name: params.first_name,
            last_name: params.last_name,
            email: params.email
        }, {
            where: {
                id: id
            }
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

module.exports = StudentController
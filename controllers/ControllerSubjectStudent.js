const { Student } = require('../models/index')
const { Subject } = require('../models/index')
const { SubjectStudent } = require('../models/index')


class Controller {
    static findJoin(id) {
        return SubjectStudent.findAll({
            where: {
                SubjectId: id
            },
            include: {
                model: Subject,
                include: {
                    model: Student
                }
            }
        })
    }
    static findStudent(studentId) {
        return SubjectStudent.findOne({
            where: {
                StudentId: studentId
            }
        })
    }
    static updateScore(studentId, subjectId, data) {
        console.log(studentId)
        console.log(subjectId)
        console.log(data)
        return SubjectStudent.update(data, {
            where: {
                SubjectId: Number(subjectId),
                StudentId: Number(studentId)
            }
        })
    }
}

module.exports = Controller

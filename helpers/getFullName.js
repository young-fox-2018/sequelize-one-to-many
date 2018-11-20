const { Student } = require('../models/index')

const getFullName = (studentId) => {
    Student.findOne({
        where: {
            id: studentId
        }
    })
        .then(student => {
            console.log(student.first_name + ' ' + student.last_name)
        })


}

// console.log(getFullName(3))


module.exports = getFullName
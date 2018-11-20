const { Subject } = require('../models/index')

const getSubjectName = (subjectId) => {
    Subject.findOne({
        where: {
            id: subjectId
        }
    })
        .then(subject => {
            console.log(subject.subject_name)
        })


}


module.exports = getSubjectName
const Model = require('../models')
const Subject = Model.Subject

class sbController{

    static allSubjects(){
        return new Promise((resolve, reject) =>{
            Subject.findAll(
                { include:
                    [
                        {
                            model: Model.Teacher
                        }
                    ]
                }
            )
             .then(dataList => {
                 resolve(dataList)
             })
             .catch(err => {
                 reject(err)
             })
        })
    }
    

    static findSubject(id){
        return new Promise((resolve, reject) => {
            Subject.findByPk(id)
            .then(subject =>{
                resolve(subject)
            })
            .catch(err => {
                reject(err)
            })
        })
    }   


    static updateSubject(input, id){
        return new Promise( (resolve, reject) => {
            Subject.update({
                subject_name: input.subjectname
            },
            {where: {id: id}}
            )
            .then(data => resolve(data) )
            .catch(err => reject(err) )
        })
    }
}

module.exports = sbController
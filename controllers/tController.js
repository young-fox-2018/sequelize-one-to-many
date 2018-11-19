const Model = require('../models')
const Teacher = Model.Teacher

class tController{

    static allTeachers(){
        return new Promise((resolve, reject) =>{
            Teacher.findAll(
                {
                    include:
                    [
                        {
                            model: Model.Subject
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

    // static addTeacher(input){
    //     return new Promise((resolve, reject) => {
    //         Teacher.create({
    //             first_name: input.firstname,
    //             last_name: input.lastname,
    //             email: input.email
    //         })
    //         .then(data => {
    //             resolve(data)
    //         })
    //         .catch(err => {
    //             reject(err.dataValues)
    //         })
    //     })
    // }

    static findTeacher(id){
        return new Promise((resolve, reject) => {
            Teacher.findByPk(String(id))
            .then(teacher =>{
                resolve(teacher)
            })
            .catch(err => {
                reject(err.dataValues)
            })
        })
    }

    static updateTeacher(input, id){
        return new Promise( (resolve, reject) => {
            Teacher.update(
            {
                first_name: input.firstname,
                last_name: input.lastname,
                email: input.email,
                subjectId: input.subjectId
            },
            {where: {id: id}}
            )
            .then(data => resolve(data) )
            .catch(err => reject(err) )
        })
    }

    // static deleteTeacher(idInput){
    //     return new Promise( (resolve, reject) => {
    //         Teacher.destroy({
    //             where: {
    //                 id: idInput
    //             }
    //         })
    //         .then( data => resolve(data) )
    //         .catch(err => reject(err.dataValues) )
    //     })
    // }

}

module.exports = tController
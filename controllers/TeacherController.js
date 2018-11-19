const Model = require('../models');
const Teacher = Model.Teacher

class TeacherController {
    static getAllTeachers() {
        return new Promise( (resolve, reject) => {
            Teacher.findAll({order: ['id'], include: [
                { model: Model.Subject}
             ]})
            .then(data => {
                let teachers = data.map(element => element.dataValues);
                resolve(teachers);
            })
            .catch(err => {
                reject(err);
            });
        });
    }

    static addTeacher(data) {
        return new Promise((resolve, reject) => {
            Teacher.create({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                SubjectId: data.subject,
                updatedAt: new Date()
            })
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            });
        });
    }

    static findTeacher(id) {
        return new Promise ((resolve, reject) => {
            Teacher.findByPk(String(id))
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err)
            });
        });
    }

    static updateTeacher(id, data) {
        return new Promise((resolve, reject) => {
            Teacher.update(
                {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    SubjectId: data.SubjectId,
                    updatedAt: new Date()
                },
                {where: {id: id}}
            )
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            });
        });
    }

    static deleteTeacher(id) {
        return new Promise( (resolve, reject) => {
            Teacher.destroy(
                {where: {id: id}})
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            });
        });
    }
}

module.exports = TeacherController
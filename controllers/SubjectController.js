const Model = require('../models/');
const Subject = Model.Subject;

class SubjectController {
    static getAllSubjects() {
        return new Promise( (resolve, reject) => {
            Subject.findAll({order: ['id']})
            .then(data => {
                let subjects = data.map(element => element.dataValues);                
                resolve(subjects);
            })
            .catch(err => {
                reject(err);
            });
        });
    }

    static addSubject(data) {
        return new Promise( (resolve, reject) => {
            Subject.create({
                subjectName: data.subject,
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

    static findSubject(id) {
        return new Promise ((resolve, reject) => {
            Subject.findByPk(String(id))
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err)
            });
        });
    }

    static updateSubject(id, data) {
        return new Promise((resolve, reject) => {
            Subject.update(
                {
                    subjectName: data.subject,
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

    static deleteSubject(id) {
        return new Promise( (resolve, reject) => {
            Subject.destroy(
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

module.exports = SubjectController;
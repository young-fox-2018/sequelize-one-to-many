'use strict';

let subjects = [
  {
    subjectName: "Fisika",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    subjectName: "Ekonomi",
    createdAt: new Date,
    updatedAt: new Date
  }
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subjects', subjects, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subjects', null, {});
  }
};

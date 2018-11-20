'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let obj = [
      {
        subjectName:"Fisika",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        subjectName:"Ekonomi",
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ]
    return queryInterface.bulkInsert('Subjects',obj)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subjects',null)
  }
};

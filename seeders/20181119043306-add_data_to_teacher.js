'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Subjects', [{
        subjectName: 'Physics',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        subjectName: 'Biology',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        subjectName: 'Mathematic',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        subjectName: 'Chemistry',
        createdAt: new Date(),
        updatedAt: new Date() 
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Subjects', null, {});
  }
};

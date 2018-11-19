'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Subjects', [
      {
        subjectName: 'Java script',
        createdAt: new Date(),
        updatedAt : new Date()
      },{
        subjectName: 'Java',
        createdAt: new Date(),
        updatedAt : new Date()
      },{
        subjectName: 'C#',
        createdAt: new Date(),
        updatedAt : new Date()
      },{
        subjectName: 'CPP',
        createdAt: new Date(),
        updatedAt : new Date()
      },{
        subjectName: 'Golang',
        createdAt: new Date(),
        updatedAt : new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Subjects', null, {});
  }
};

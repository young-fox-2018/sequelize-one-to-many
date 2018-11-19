'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Subjects', [
      {
        subject_name: 'Chemistry',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subject_name: 'Economy',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ],);
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Subjects', null, {});
  }
};

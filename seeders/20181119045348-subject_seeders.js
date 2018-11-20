'use strict';

const dataSubject = [
  {
    subject_name: 'Kimia',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    subject_name: 'Ekonomi',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subjects', dataSubject, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subjects', null, {});
  }
};

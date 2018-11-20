'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Teachers', [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'jon.doe@gmail.com',
        subjectId : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName: 'Zi',
        lastName: 'O',
        email: 'zio@gmail.com',
        subjectId : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName: 'Geiz',
        lastName: 'Geim',
        email: 'geiz@gmail.com',
        subjectId : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName: 'Anti',
        lastName: 'Hero',
        email: 'geiz@gmail.com',
        subjectId : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName: 'Tsuku',
        lastName: 'Yomi',
        email: 'tsuku@gmail.com',
        subjectId : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName: 'Kiryu',
        lastName: 'Sento',
        email: 'kiryu.sento@gmail.com',
        subjectId : 4,
        createdAt : new Date(),
        updatedAt : new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Teachers', null, {});
  }
};

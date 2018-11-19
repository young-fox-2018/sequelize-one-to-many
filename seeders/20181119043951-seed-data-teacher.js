'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Teachers', [
      {
        firstName: 'Abed',
        lastName: "Nego",
        email: "abednego@sekolah.id" ,
        SubjectId: 3,
        createdAt: new Date(),
        updatedAt : new Date() 
      }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Teachers', null, {});
  
  }
};

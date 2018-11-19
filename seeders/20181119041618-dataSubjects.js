'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Subjects',[
     {
     SubjectName : 'Fisika',
     createdAt: new Date(),
     updatedAt : new Date()
   },{
    SubjectName : 'Ekonomi',
    createdAt: new Date(),
    updatedAt : new Date()
   }])
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Subjects', null)
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Teachers', [{
      FirstName : 'Bambang',
      LastName : 'Suprapto',
      email : 'bambangsuprapto@sekolah.id',
      SubjectId: 2,
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      FirstName : 'Rukmana',
      LastName : 'Fatmawati',
      email : 'rukmanfatmawati@sekolah.id',
      SubjectId: 2,
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      FirstName : 'Bulet',
      LastName : 'Naiborhu',
      email : 'buletnaiborhu@sekolah.id',
      SubjectId: 1,
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      FirstName : 'Yulius',
      LastName : 'Prawiranegara',
      email : 'yuliusprawiranegara@sekolah.id',
      SubjectId: 1,
      createdAt: new Date(),
      updatedAt : new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null)
  }
};

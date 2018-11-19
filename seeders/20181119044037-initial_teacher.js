'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers', [{
      firstName: 'Bambang',
      lastName: 'Suprapto',
      SubjectId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'bambangsuprapto@sekolah.id'
    },
    {
      firstName: 'Rukmana',
      lastName: 'Fatmawati',
      SubjectId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'rukmanafatmawati@sekolah.id'
    },
    {
      firstName: 'Butet',
      lastName: 'Naiborhu',
      SubjectId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'butetnaiborhu@sekolah.id'
    },
    {
      firstName: 'Yulius',
      lastName: 'Prawiranegara',
      SubjectId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'yuliusprawiranegara@sekolah.id'
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {});
  }
};

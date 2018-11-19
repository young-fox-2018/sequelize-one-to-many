'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers', [{
      first_name: "Bambang",
      last_name: "Suparapto",
      email: "bambangsuprapto@sch.id",
      subjectId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: "Rukmana",
      last_name: "Fatmawati",
      email: "rukmanafatmawati@sch.id",
      subjectId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: "Butet",
      last_name: "Nairbohu",
      email: "butetnairbohuo@sch.id",
      subjectId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: "Yulius",
      last_name: "Prawiranegara",
      email: "yuliusprawiranegara@sch.id",
      subjectId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {});

  }
};

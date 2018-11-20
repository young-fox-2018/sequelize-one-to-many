'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let obj = [
      {
        first_Name: "Bambang",
        Last_Name: "Suprapto",
        Email: "bambangsuprapto@sekolah.id",
        createdAt: new Date(),
        updatedAt: new Date()

    },{
      first_Name: "Rukmana",
      Last_Name: "Fatmawati",
      Email: "rukmanafatmawati@sekolah.id",
      createdAt: new Date(),
      updatedAt: new Date()

  },{
    first_Name: "Butet",
    Last_Name: "Naiborhu",
    Email: "butetnaiborhu@sekolah.id",
    createdAt: new Date(),
    updatedAt: new Date()

},{
  first_Name: "Yulius",
  Last_Name: "Prawiranegara",
  Email: "yuliusprawiranegara@sekolah.id",
  createdAt: new Date(),
  updatedAt: new Date()

}
  ]

    return queryInterface.bulkInsert('Teachers',obj)
    
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Teachers',null)
  }
};

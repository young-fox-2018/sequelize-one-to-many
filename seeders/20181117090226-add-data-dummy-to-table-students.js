'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    let data = [{
      first_name: 'Heri',
      last_name: 'Susanto',
      email: 'herisusanto@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Muhammad',
      last_name: 'Khevin',
      email: 'muhammamdkhevin@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Dzikry',
      last_name: 'Fatullah',
      email: 'dzikryfatullah@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Faishal',
      last_name: 'Amir',
      email: 'faisahalamir@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Sulis',
      last_name: 'Tayo',
      email: 'sulistayo@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Sendy',
      last_name: 'Akbar',
      email: 'sendyakbar@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    return queryInterface.bulkInsert('Students', data, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Students', null, {})
  }
};

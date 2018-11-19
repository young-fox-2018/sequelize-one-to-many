'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Teachers', 'subject_id', Sequelize.INTEGER);

  },
  
  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Teachers', 'subject_id');

  }
};

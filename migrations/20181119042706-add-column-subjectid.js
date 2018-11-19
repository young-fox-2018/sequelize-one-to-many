'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Teachers',
      'SubjectId',
      {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Teachers', `SubjectId`);
  }
};

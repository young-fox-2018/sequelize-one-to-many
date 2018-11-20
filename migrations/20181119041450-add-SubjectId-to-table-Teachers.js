'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn('Teachers', 'SubjectId', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    })
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn('Teachers', 'SubjectId')
  }
};

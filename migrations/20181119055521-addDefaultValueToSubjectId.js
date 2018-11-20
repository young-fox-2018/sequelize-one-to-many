'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.changeColumn('Teachers', 'SubjectId', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Teachers', 'SubjectId', {
      type: Sequelize.INTEGER
    })
  }
};

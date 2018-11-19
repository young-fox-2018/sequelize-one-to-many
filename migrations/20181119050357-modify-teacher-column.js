'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Teachers', 'subjectId', {
        type: 'INTEGER USING CAST("subjectId" as INTEGER)'
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Teachers', 'subjectId', {
      type: Sequelize.STRING
    })
  }
};
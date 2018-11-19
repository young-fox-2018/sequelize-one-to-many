'use strict';
// const Model = require('../models/index')

module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    email: DataTypes.STRING,
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};
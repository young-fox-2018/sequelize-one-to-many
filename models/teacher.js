'use strict';
// const Model = require('../models/index')

module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail: true,
        isUnique: true
      }
    },
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};
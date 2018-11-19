'use strict';
// const Model = require("../models")
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    subjectName: DataTypes.STRING
  }, {});
  Subject.associate = function(models) {
    Subject.hasMany(models.Teacher, {foreignKey: "subjectId",})
  };
  return Subject;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    subjectName: DataTypes.STRING,
    teacherId: DataTypes.INTEGER
  }, {});
  Subject.associate = function(models) {
    Subject.hasMany(models.Teacher, {foreignKey: "subjectId"})
  };
  return Subject;
};
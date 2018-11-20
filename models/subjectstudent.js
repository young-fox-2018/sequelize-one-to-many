'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubjectStudent = sequelize.define('SubjectStudent', {
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {});
  SubjectStudent.associate = function (models) {
    // associations can be defined here
    SubjectStudent.belongsTo(models.Subject)
    SubjectStudent.belongsTo(models.Student)

  };
  return SubjectStudent;
};
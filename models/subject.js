'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING
  }, {});
  Subject.associate = function (models) {
    // associations can be defined here
    Subject.belongsToMany(models.Student, { through: models.SubjectStudent })
    Subject.hasMany(models.Teacher)


  };
  return Subject;
};
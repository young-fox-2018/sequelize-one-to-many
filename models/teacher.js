'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    first_Name: DataTypes.STRING,
    Last_Name: DataTypes.STRING,
    Email: DataTypes.STRING,
    Subjectid: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    Teacher.belongsTo(models.Subject,{foreignKey:"Subjectid"})
    // associations can be defined here
  };
  return Teacher;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: 
    {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: true
      }
    },
    subjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    Teacher.belongsTo(models.Subject,{foreignKey: "subjectId"})
  };
  return Teacher;
};
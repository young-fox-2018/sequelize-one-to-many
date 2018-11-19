'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique(value) {
          return Teacher.findOne({
            where: {
              email: value
            }
          }).then((result) => {
            if (result) {
              throw new Error("Duplikat!")
            }
          }).catch((err) => {
            throw new Error("DUPLIKAT")
          });
        }
      }
    },
    SubjectId: DataTypes.STRING
  }, {});
  Teacher.associate = function (models) {
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};
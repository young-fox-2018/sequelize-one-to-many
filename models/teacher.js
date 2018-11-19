'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isUniqueEmail(value) {
          console.log(value)
          return Teacher.findOne({where : {
            email: value
          }}).then((data) => {
            if (data) {
              throw new Error('Email is Used')
            } else {

            }
          }).catch((err) => {
            throw new Error(err)
          });
        },
        isEmail: {
          args: true,
          msg: 'Email format is incorrect'
        }
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
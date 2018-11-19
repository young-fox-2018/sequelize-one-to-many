'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Email format is incorrect!"
        },
        isUnique(value) {
          return Teacher.findOne({
            where: {
              email: value
            }
          })
            .then((data) => {
              if (data) throw new Error('Email must unique!')
            })
            .catch(err => {
              throw err
            })
        }
      }
    }
  }, {});
  Teacher.associate = function(models) {
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};
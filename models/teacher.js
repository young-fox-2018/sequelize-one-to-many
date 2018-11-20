'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    first_name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 10],
          msg: `Length between 3 and 10!`
        }
      }
    },
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: `email format is incorrect!`
        },
        isUnique(value) {
          return Teacher.findOne({
            where: {
              email: value
            }
          })
            .then(data => {
              if (data) {
                throw new Error(`This email has been used by another user!`)
              }
            })
            .catch(err => {
              throw err
            })

        }
      }

    }

  }, {});
  Teacher.associate = function (models) {
    // associations can be defined here
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};
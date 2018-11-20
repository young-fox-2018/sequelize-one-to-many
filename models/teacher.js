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
          msg: `Missing @ or . character when create email!`
        },
        isUnique(email) {
          return Teacher.findOne({
            where: {
              email: email
            }
          })
            .then(function (found) {
              if (found) {
                throw new Error(`Email already exists!`)
              }
            })
            .catch(function (err) {
              throw new Error(err)
            })
        }
      }
    },
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function (models) {
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};
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
          msg: "Format email is in correct"
        },
        isUnique(value) {
          return Teacher.findOne({
            where: { email: value }
          }).then((result) => {
            if (result) {
              throw new Error('Only new email are allowed!')
            }
          })
            .catch((err) => {
              throw new Error(err)
            });
        }
      }
    },
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function (models) {
    // associations can be defined here
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};
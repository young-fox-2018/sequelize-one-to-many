'use strict';

module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email address is not valid'
        },
        isUnique(value) {
          return Teacher.findOne({where: {email:value}})
            .then(function(data) {
              if (data) {
                throw new Error('Email address already in used!')
              }
            })
            .catch(function(err) {
              throw new Error(err)
            })
          }
      }
    },
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    Teacher.belongsTo(models.Subject);
  };
  return Teacher;
};
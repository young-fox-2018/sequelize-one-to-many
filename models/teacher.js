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
          msg: 'Validation error: email format is incorrect'
        },
        isUnique: function() {
          return Teacher.findOne({where: {email: this.email}})
            .then(data => {
              if(data) throw new Error('Validation error: email is already taken')
            })
            .catch(err => {
              throw new Error(err)
            })
        }
      }
    },
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    Teacher.belongsTo(models.Subject, {foreignKey: 'SubjectId'});
  };
  return Teacher;
};
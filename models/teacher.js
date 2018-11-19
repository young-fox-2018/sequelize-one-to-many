'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function() {
          return Teacher.findOne({
            where :  {
              email : this.email
            }
          })
          .then((data) => {
            if(data) {
              throw new Error('Email is not unique')
            }
          })
          .catch(data => {
            throw new Error(data)
          })
        } 
      }
    },
    subjectId : DataTypes.INTEGER 
    }, {
      hooks : {
        beforeUpdate : (input, options) => {
          console.log('masuk ga')
          if(!input.subjectId) {
            input.subjectId = 0
          }
        }
      }
    });
  Teacher.associate = function(models) {
    Teacher.belongsTo(models.Subject, {foreignKey: 'subjectId'})
  };
  return Teacher;
};
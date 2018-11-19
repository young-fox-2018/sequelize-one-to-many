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
          msg: 'email ga akurat mas bro!'
        },inUnique(value) {
          return Teacher.findOne({
            where: {
              email: value
            }
          })
          .then(data => {
            if(data) {
              throw new Error('email sama mas bro')
            }
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
    // associations can be defined here
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};
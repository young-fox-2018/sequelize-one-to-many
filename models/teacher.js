'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate : {
        isEmail: {
          args: true,
          msg: "Email is not valid!"
        },
        isUnique(value) {
          return Teacher.findAll({
            where: {
              email: value
            }
          }).then(data =>{
            if(data) {
              throw new error("This email already exist!")
            }
          }).catch(err => {
            throw new error(err)
          })
        }
      }
    },
    subjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    Teacher.belongsTo(models.Subject, {foreignKey: "subjectId",})
  };
  return Teacher;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email:{
      type: DataTypes.STRING,
      validate: {
          isUnique: function () {
              return Teacher.findOne({where: {email: this.email}})
                  .then(data=> {
                    if(data) throw ('Email already in use!');
                  })
                  .catch(err=>{
                    throw new Error(err)
                  })
          },
          isEmail: {
            args: true, msg:"email is not valid"
          }
      }
    },
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
      Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};
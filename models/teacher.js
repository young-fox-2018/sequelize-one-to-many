'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args:true,
          msg: "format email salah"
        }
        ,
        isUniq: function(){
          return Teacher.findOne({
            where:{
              email: this.email
            }
          })
          .then(data=>{
            if(data){
              throw new Error("email is used")
            }
          })
          .catch(err=>{
            throw new Error(err)
          })

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
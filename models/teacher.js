'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Wrong email format"
        },
        isUnique(value) {
            return Teacher.findOne({
              where: {
                  email: value
              }
            })
              .then(function(teacher) {
                  if (teacher) {
                    throw new Error('Email already exist!!')    
                  }              
              })
              .catch(function(err){
                  throw new Error(err)    
              })
        }
      }
    },
    subject_id: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
    Teacher.belongsTo(models.Subject, {foreignKey: "subject_id"})
  };
  return Teacher;
};
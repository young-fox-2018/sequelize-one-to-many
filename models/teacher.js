'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail: true,
        isUnique(value){
          return Teacher.findAll({
           where:{
             email: value
           }
         })
         .then(data => {
           // console.log(" =====> ",data)
           if(data.length !== 0){
           throw new Error(`Email is registered`)
         }})
         .catch(err => { throw new Error (err) })
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
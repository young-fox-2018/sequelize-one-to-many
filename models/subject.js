'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    subject_name: {
      type: DataTypes.STRING,
      validate: {
        isUnique(subject_name) {
          return Subject.findOne({
            where: {
              subject_name: subject_name
            }
          })
            .then(function (found) {
              if (found) {
                throw new Error(`Subject already exists`)
              }
            })
            .catch(function (err) {
              throw new Error(err)
            })

        }
      }
    }
  }, {});
  Subject.associate = function (models) {
    Subject.hasMany(models.Teacher)
  };
  return Subject;
};
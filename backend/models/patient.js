module.exports = (sequelize, DataTypes) => {
    const patient = sequelize.define("patient", {
      email: {
        type: DataTypes.STRING(100)
      },
      password: {
        type: DataTypes.STRING(200)
      },
      pin_number: {
        type: DataTypes.STRING(13)
      },
      patient_name: {
        type: DataTypes.STRING(100)
      },
      birthday: {
        type: DataTypes.STRING(30)
      },
      gender: {
        type: DataTypes.ENUM("male","female")
      },
      address: {
        type: DataTypes.STRING(500)
      },
      tel: {
        type: DataTypes.STRING(10)
      },
      role: {
        type: DataTypes.ENUM("patient")
      },
      parent_name: {
        type: DataTypes.STRING(100)
      },
      parent_rel: {
        type: DataTypes.STRING(100)
      },
      parent_tel: {
        type: DataTypes.STRING(10)
      }
    });

    patient.associate = function (models) {
        // associations can be defined here
        patient.belongsToMany(models.consult, {
          as: "patient",
          foreignKey: "patient_id",
          through: models.reserve
        });
    };

    return patient
}
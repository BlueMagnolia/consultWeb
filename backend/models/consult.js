module.exports = (sequelize, DataTypes) => {
    const consult = sequelize.define("consult", {
      // username: {
      //     type: DataTypes.STRING(20)
      // },
      password: {
        type: DataTypes.STRING(200)
      },
      consult_name: {
        type: DataTypes.STRING(100)
      },
      email: {
        type: DataTypes.STRING(100)
      },
      tel: {
        type: DataTypes.STRING(10)
      },
      certificate: {
        type: DataTypes.STRING(500)
      },
      no_certificate: {
        type: DataTypes.STRING(20)
      },
      role: {
        type: DataTypes.ENUM("psychiatrist", "psychologist")
      },
      ref_name: {
        type: DataTypes.STRING(100)
      },
      ref_position: {
        type: DataTypes.STRING(100)
      },
      ref_tel: {
        type: DataTypes.STRING(10)
      },
      ref_letter: {
        type: DataTypes.STRING(500)
      }
    });

    consult.associate = function (models) {
        // associations can be defined here
      consult.hasMany(models.appointmentConsult, {
        foreignKey: "consult_id",
      });
      consult.belongsToMany(models.patient, {
          as: "consult",
          foreignKey: "consult_id",
          through: models.reserve
        });
    };

    return consult
}
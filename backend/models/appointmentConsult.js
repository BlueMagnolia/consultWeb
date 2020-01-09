const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const appointmentConsult = sequelize.define("appointmentConsult", {
    time: {
      type: DataTypes.STRING(30)
    },
    date: {
      type: DataTypes.STRING(30)
    },
    status: {
      type: DataTypes.STRING(20)
    }
  });

  appointmentConsult.associate = function(models) {
    // associations can be defined here
    appointmentConsult.belongsTo(models.consult, {
      foreignKey: "consult_id",
    });
  };

  return appointmentConsult;
};

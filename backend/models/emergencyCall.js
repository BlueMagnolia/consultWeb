module.exports = (sequelize, DataTypes) => {
    const emergencyCall = sequelize.define('emergencyCall', {
        parent_name: {
            type: DataTypes.STRING(100)
        },
        parent_tel: {
            type: DataTypes.STRING(10)
        }
    })
    
    // emergencyCall.associate = function (models) {
    //     // associations can be defined here
    //     emergencyCall.hasMany(models.comment, { foreignKey: 'parent_id' })
    // };

    return emergencyCall
}
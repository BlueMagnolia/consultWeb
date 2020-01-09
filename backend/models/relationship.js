module.exports = (sequelize, DataTypes) => {
    const relationship = sequelize.define('relationship', {
        rel_status: {
            type: DataTypes.STRING(100)
        }
    })

    // relationship.associate = function (models) {
    //     // associations can be defined here
    //     relationship.hasMany(models.comment, { foreignKey: 'rel_id' })
    // };

    return relationship
}
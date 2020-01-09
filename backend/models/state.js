module.exports = (sequelize, DataTypes) => {
    const state = sequelize.define('state', {
        price: {
            type: DataTypes.STRING(10)
        }
    })

    // state.associate = function (models) {
    //     // associations can be defined here
    //     state.hasMany(models.comment, { foreignKey: 'state_id' })
    // };

    return state
}
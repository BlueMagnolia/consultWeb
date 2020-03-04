module.exports = (sequelize, DataTypes) => {
    const reserve = sequelize.define('reserve', {
        time: {
            type: DataTypes.STRING(100)
        },
        date: {
            type: DataTypes.STRING(100)
        },
        
    })

    return reserve
}
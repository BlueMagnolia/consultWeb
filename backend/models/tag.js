module.exports = (sequelize, DataTypes) => {
    const tag = sequelize.define('tag', {
        problem_list: {
            type: DataTypes.STRING(100)
        }
    })

    // tag.associate = function (models) {
    //     // associations can be defined here
    //     tag.hasMany(models.comment, { foreignKey: 'tag_id' })
    // };

    return tag
}
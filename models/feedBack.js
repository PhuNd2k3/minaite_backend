'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + `/helpers/datetime`)
module.exports = (sequelize, DataTypes) => {
    class FeedBack extends Model {
        static associate(models) {
            FeedBack.belongsTo(models.FeedBack, {foreignKey : 'id'})
            FeedBack.belongsTo(models.Product, {foreignKey : 'product_id'})
            FeedBack.belongsTo(models.User, {foreignKey : 'user_id'})
            FeedBack.hasMany(models.FeedBack, {foreignKey : 'parent_id'})
        }
    }
    FeedBack.init(
        {
            user_id: DataTypes.INTEGER,
            product_id : DataTypes.INTEGER,
            star : DataTypes.INTEGER,
            parent_id : DataTypes.INTEGER,
            content : DataTypes.STRING,
            createdAt: {
                type: DataTypes.DATE,
                get: function () {
                    if (this.getDataValue('createdAt')) {
                        return toLocaleString(this.getDataValue('createdAt'))
                    }
                    return null
                },
            },
            updatedAt: {
                type: DataTypes.DATE,
                get: function () {
                    if (this.getDataValue('updatedAt')) {
                        return toLocaleString(this.getDataValue('updatedAt'))
                    }
                    return null
                },
            },
        },
        {
            sequelize,
            modelName: 'FeedBack',
        },
    )
    return FeedBack
}

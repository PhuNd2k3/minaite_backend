'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + `/helpers/datetime`)
module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        static associate(models) {
            Cart.belongsTo(models.User, {foreignKey : 'user_id'})
            Cart.belongsTo(models.ProductDetail, {foreignKey : 'product_detail_id'})
        }
    }
    Cart.init(
        {
            user_id: DataTypes.INTEGER,
            product_detail_id : DataTypes.INTEGER,
            quantity : DataTypes.INTEGER,
            total_price : DataTypes.INTEGER,
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
            modelName: 'Cart',
        },
    )
    return Cart
}

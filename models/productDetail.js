'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + `/helpers/datetime`)
module.exports = (sequelize, DataTypes) => {
    class ProductDetail extends Model {
        static associate(models) {
            ProductDetail.belongsTo(models.Product, {foreignKey : 'product_id'})
            ProductDetail.hasMany(models.Cart, {foreignKey : 'product_detail_id'})
            ProductDetail.hasMany(models.BillDetail, {foreignKey : 'product_detail_id'})
        }
    }
    ProductDetail.init(
        {
            product_id: DataTypes.INTEGER,
            size : DataTypes.STRING,
            color: DataTypes.STRING,
            quan_in_stock : DataTypes.INTEGER,
            deletedAt: {
                type: DataTypes.DATE,
                get: function () {
                    if (this.getDataValue('deletedAt')) {
                        return toLocaleString(this.getDataValue('deletedAt'))
                    }
                    return null
                },
            },
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
            modelName: 'ProductDetail',
        },
    )
    return ProductDetail
}

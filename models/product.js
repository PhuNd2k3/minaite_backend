'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + `/helpers/datetime`)
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            Product.belongsTo(models.Category, {foreignKey: 'category_id'})
            Product.hasMany(models.FeedBack, {foreignKey : 'product_id'})
            Product.hasMany(models.ProductDetail, {foreignKey : 'product_id'})
            Product.hasMany(models.ProductImage, {foreignKey : 'product_id'})
        }
    }
    Product.init(
        {
            category_id: DataTypes.INTEGER,
            product_name : DataTypes.STRING,
            price: DataTypes.INTEGER,
            description : DataTypes.STRING,
            likes : DataTypes.INTEGER,
            quan_in_stock : DataTypes.INTEGER,
            origin : DataTypes.STRING,
            fromCity : DataTypes.STRING,
            mall_or_not_boolean : DataTypes.BOOLEAN,
            discount : DataTypes.INTEGER,
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
            modelName: 'Product',
        },
    )
    return Product
}

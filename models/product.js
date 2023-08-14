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
            description : DataTypes.STRING(3000),
            likes : DataTypes.INTEGER,
            star : DataTypes.FLOAT,
            quan_sold : DataTypes.INTEGER,
            quan_in_stock : DataTypes.INTEGER,
            origin : DataTypes.STRING,
            fromCity : DataTypes.STRING,
            isMall : DataTypes.BOOLEAN,
            discount : DataTypes.INTEGER,
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
            modelName: 'Product',
        },
    )
    return Product
}

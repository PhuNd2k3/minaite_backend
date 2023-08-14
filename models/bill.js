'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + `/helpers/datetime`)
module.exports = (sequelize, DataTypes) => {
    class Bill extends Model {
        static associate(models) {
            Bill.belongsTo(models.User, {foreignKey : 'user_id'})
            Bill.hasMany(models.AddVoucher, {foreignKey : 'bill_id'}),
            Bill.hasMany(models.BillDetail, {foreignKey : 'bill_id'})
        }
    }
    Bill.init(
        {
            recipient_info: DataTypes.STRING,
            user_id : DataTypes.INTEGER,
            payment_method : DataTypes.STRING,
            transport_method : DataTypes.STRING,
            book_status : DataTypes.STRING,
            ship_status : DataTypes.STRING,
            ship_money : DataTypes.INTEGER,
            ship_discount : DataTypes.INTEGER,
            product_money : DataTypes.INTEGER,
            product_discount : DataTypes.INTEGER,
            total_price : DataTypes.INTEGER,
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
            modelName: 'Bill',
        },
    )
    return Bill
}

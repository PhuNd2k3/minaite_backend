'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + `/helpers/datetime`)
module.exports = (sequelize, DataTypes) => {
    class Voucher extends Model {
        static associate(models) {
            Voucher.belongsTo(models.Category, {foreignKey : 'category_id', optional: true,})
            Voucher.hasMany(models.AddVoucher, {foreignKey: 'voucher_id'})
        }
    }
    Voucher.init(
        {
            types: DataTypes.STRING,
            discount : DataTypes.INTEGER,
            start_date : DataTypes.DATE,
            end_date : DataTypes.DATE,
            voucher_quantity : DataTypes.INTEGER,
            category_id : DataTypes.INTEGER, 
            access_to_all : DataTypes.BOOLEAN,
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
            modelName: 'Voucher',
        },
    )
    return Voucher
}

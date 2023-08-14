'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + `/helpers/datetime`)
module.exports = (sequelize, DataTypes) => {
    class AddVoucher extends Model {
        static associate(models) {
            AddVoucher.belongsTo(models.Voucher,{foreignKey : 'voucher_id'})
            AddVoucher.belongsTo(models.Bill,{foreignKey : 'bill_id'})
        }
    }
    AddVoucher.init(
        {
            voucher_id: DataTypes.INTEGER,
            bill_id : DataTypes.INTEGER,
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
            modelName: 'AddVoucher',
        },
    )
    return AddVoucher
}

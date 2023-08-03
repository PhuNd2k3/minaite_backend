'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + `/helpers/datetime`)
module.exports = (sequelize, DataTypes) => {
    class BillDetail extends Model {
        static associate(models) {
            BillDetail.belongsTo(models.Bill, {foreignKey : 'bill_id'})
            BillDetail.belongsTo(models.ProductDetail, {foreignKey : 'product_detail_id'})
        }
    }
    BillDetail.init(
        {
            product_detail_id: DataTypes.INTEGER,
            bill_id : DataTypes.INTEGER,
            quantity : DataTypes.INTEGER,
            net_price : DataTypes.INTEGER,
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
            modelName: 'BillDetail',
        },
    )
    return BillDetail
}

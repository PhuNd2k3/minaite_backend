'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + `/helpers/datetime`)
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasOne(models.Wallet, { foreignKey: 'user_id' })
            User.hasMany(models.FeedBack, {foreignKey : 'user_id'})
            User.hasMany(models.Cart, {foreignKey : 'user_id'})
            User.hasMany(models.Bill, {foreignKey : 'user_id'})
        }
    }
    User.init(
        {
            name: DataTypes.STRING,
            gender : DataTypes.STRING,
            birthday : DataTypes.DATE,
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: true,
                },
            },
            telephone : DataTypes.CHAR,
            address : DataTypes.STRING,
            avatar_url : DataTypes.STRING,
            password: DataTypes.CHAR,
            is_admin: DataTypes.BOOLEAN,
            // deletedAt: {
            //     type: DataTypes.DATE,
            //     get: function () {
            //         if (this.getDataValue('deletedAt')) {
            //             return toLocaleString(this.getDataValue('deletedAt'))
            //         }
            //         return null
            //     },
            // },
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
            modelName: 'User',
        },
    )
    return User
}

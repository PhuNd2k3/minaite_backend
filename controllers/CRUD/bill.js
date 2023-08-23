const models = require(process.cwd() + '/models')
const { getCurrentDateTime } = require(process.cwd() + '/helpers/datetime')
const { Op } = require('sequelize')

const include = []

async function showByUserId(userId) {
    return models.Bill.findAndCountAll({
        where : {
            user_id : userId
        },
        order: [
            ["id", "ASC"],
            ["createdAt", "DESC"]
        ],
    })
}

async function showById(id) {
    return models.Bill.findByPk(id)
}

module.exports = {
    showByUserId : showByUserId,
    showBillById : showById
}
const { Op } = require('sequelize')

const models = require(process.cwd() + '/models/index')
const objectCleaner = require(process.cwd() + '/helpers/object-cleaner')

const include = [
    {
        model: models.User,
        attributes: { exclude: ['password', 'updatedAt'] },
    },
]

async function showById(id) {
    return models.Wallet.findByPk(id, {
        include: include,
    })
}

async function showByUserId(userId) {
    return models.Wallet.findOne({
        include: include,
        where: { user_id: userId },
    })
}

async function create(newWallet) {
    return models.Wallet.create(newWallet)
}

async function update(updateWallet, id) {
    return models.Wallet.update(updateWallet, { where: { id: id } })
}

async function checkOwner(walletId, userId) {
    return !!(await models.Wallet.findOne({
        where: { id: walletId, user_id: userId },
    }))
}

module.exports = {
    //getListWallets: index,
    getWalletById: showById,
    getWalletByUserId: showByUserId,
    addNewWallet: create,
    updateWalletById: update,
    checkUserOwnWallet: checkOwner,
}

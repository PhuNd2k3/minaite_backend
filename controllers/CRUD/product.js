const { Op } = require('sequelize')
const models = require(process.cwd() + '/models')
const { getCurrentDateTime } = require(process.cwd() + '/helpers/datetime')

async function showById(id) {
    return models.Category.findByPk(id, { include: include })
}

async function showByEmail(email) {
    return models.User.findOne({ include: include, where: { email: email } })
}

async function create(newUser) {
    return models.User.create(newUser)
}

async function update(updateUser, id) {
    return models.User.update(updateUser, { where: { id: id } })
}

async function destroy(id) {
    const now = getCurrentDateTime()

    // Update deletedAt field of user
    const updateProduct = {
        deletedAt: now,
    }
    await update(updateProduct, id)
}

module.exports = {
    getUserById: showById,
    getUserByEmail: showByEmail,
    addNewUser: create,
    updateUserById: update,
    softDeleteUserById: destroy,
}

const { Op } = require('sequelize')
const models = require(process.cwd() + '/models')
const { getCurrentDateTime } = require(process.cwd() + '/helpers/datetime')

async function index()
{
    return models.Category.findAndCountAll()
}

async function showById(id) {
    return models.Category.findByPk(id)
}

async function create(newCategory) {
    return models.Category.create(newCategory)
}

async function update(newCategory, id) {
    return models.Category.update(newCategory, { where: { id: id } })
}

async function destroy(id) {
    const now = getCurrentDateTime()

    // Update deletedAt field of user
    const updateUser = {
        deletedAt: now,
    }
    await update(updateUser, id)
}

module.exports = {
    index : index,
    getCategoryById: showById,
    addNewCategory: create,
    updateCategoryById: update,
    softDeleteUserById: destroy,
}

const { Op } = require('sequelize')
const models = require(process.cwd() + '/models')
const { getCurrentDateTime } = require(process.cwd() + '/helpers/datetime')
const objectCleaner = require(process.cwd() + '/helpers/object-cleaner')

async function index(startIndex, limit, params)
{
    const selection = objectCleaner.clean({
        name : { [Op.like] : `%${params.txt_search}%`},
        deletedAt : {
            [Op.between] : [params.deleteFrom_date, params.deleteTo_date]
        }
    })
    return models.Category.findAndCountAll(
        objectCleaner.clean({
            offset : Number.isNaN(startIndex) ? null : startIndex,
            limit : Number.isNaN(limit) ? null : limit,
            order : [
                ['id', 'DESC'],
                ['name', 'ASC']
            ],
            where : selection,
        })
    )
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

    const updateCategory = {
        deletedAt: now,
    }
    await update(updateCategory, id)
}

module.exports = {
    getListCategory : index,
    getCategoryById: showById,
    addNewCategory: create,
    updateCategoryById: update,
    softDeleteUserById: destroy,
}

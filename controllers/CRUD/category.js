const { Op } = require("sequelize");
const models = require(process.cwd() + "/models");
const { getCurrentDateTime } = require(process.cwd() + "/helpers/datetime");
const objectCleaner = require("../../helpers/object-cleaner");

async function index(startIndex, limit, params) {
    const selection = objectCleaner.clean({
        name: params.txt_search
            ? { [Op.like]: `%${params.txt_search}%` }
            : null,
        deletedAt: params.delete_from_date
            ? params.delete_to_date
                ? {
                      [Op.between]: [
                          params.delete_from_date,
                          params.delete_to_date,
                      ],
                  }
                : { [Op.gt]: params.delete_from_date }
            : params.delete_to_date
            ? { [Op.lt]: params.delete_to_date }
            : null,
        createdAt: params.create_from_date
            ? params.create_to_date
                ? {
                      [Op.between]: [
                          params.create_from_date,
                          params.create_to_date,
                      ],
                  }
                : { [Op.gt]: params.create_from_date }
            : params.create_to_date
            ? { [Op.lt]: params.create_to_date }
            : null,
        deletedAt: params.isDeleted ? { [Op.not]: null } : { [Op.is]: null },
    });
    return models.Category.findAndCountAll(
        objectCleaner.clean({
            offset: Number.isNaN(startIndex) ? null : startIndex,
            limit: Number.isNaN(limit) ? null : limit,
            order: [
                ["id", "ASC"],
                ["name", "DESC"],
            ],
            where: selection,
        })
    );
}

async function showById(id) {
    return models.Category.findByPk(id);
}

async function create(newCategory) {
    return models.Category.create(newCategory);
}

async function update(updateCategory, id) {
    return models.Category.update(updateCategory, { where: { id: id } });
}

async function destroy(id) {
    const now = getCurrentDateTime();

    const updateCategory = {
        deletedAt: now,
    };
    await update(updateCategory, id);
}

async function checkCategoryExisted(categoryName) {
    return !!(await models.Category.findOne({
        where: {
            name: categoryName,
        },
    }));
}

module.exports = {
    getListCategory: index,
    getCategoryById: showById,
    addNewCategory: create,
    updateCategoryById: update,
    softDeleteCategoryById: destroy,
    checkCategoryExisted: checkCategoryExisted,
};

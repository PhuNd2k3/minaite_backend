const { Op } = require("sequelize");
const models = require(process.cwd() + "/models");
const { getCurrentDateTime } = require(process.cwd() + "/helpers/datetime");
const objectCleaner = require("../../helpers/object-cleaner");

async function showDetailByProductById(ProductId)
{
    return models.ProductDetail.findAll({
        where: { product_id: ProductId },
    });
}

module.exports = {
    getDetailByProductById : showDetailByProductById,
}
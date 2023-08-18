const { Op } = require("sequelize");
const models = require(process.cwd() + "/models");
const { getCurrentDateTime } = require(process.cwd() + "/helpers/datetime");
const objectCleaner = require("../../helpers/object-cleaner");

async function showImageByProducById(ProductId)
{
    return models.ProductImage.findAndCountAll({
        where: { product_id: ProductId },
    });
}

module.exports = {
    getImageByProductById : showImageByProducById,
}
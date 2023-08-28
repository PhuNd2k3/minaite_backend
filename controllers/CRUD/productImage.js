const { Op } = require("sequelize");
const models = require(process.cwd() + "/models");
const { getCurrentDateTime } = require(process.cwd() + "/helpers/datetime");
const objectCleaner = require("../../helpers/object-cleaner");

async function showImageByProducById(ProductId)
{
    return models.ProductImage.findAndCountAll({
        where: { product_id: ProductId },
        attributes: ['image'],
    });
}

async function create(newProductImage) {
    return models.ProductImage.create(newProductImage);
}

module.exports = {
    getImageByProductById : showImageByProducById,
    addProductImage : create
}
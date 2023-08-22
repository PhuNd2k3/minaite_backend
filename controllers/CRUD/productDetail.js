const { Op } = require("sequelize");
const models = require(process.cwd() + "/models");
const { getCurrentDateTime } = require(process.cwd() + "/helpers/datetime");
const objectCleaner = require("../../helpers/object-cleaner");

async function showDetailByProductById(ProductId)
{
    return models.ProductDetail.findAndCountAll({
        where: { product_id: ProductId },
    });
}

async function create(newProductDetail) {
    return models.ProductDetail.create(newProductDetail)
}

module.exports = {
    getDetailByProductById : showDetailByProductById,
    addProductDetails : create
}
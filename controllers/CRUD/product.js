const { Op } = require("sequelize");
const models = require(process.cwd() + "/models");
const { getCurrentDateTime } = require(process.cwd() + "/helpers/datetime");
const objectCleaner = require("../../helpers/object-cleaner");

const include = [
    {
        model: models.Category,
        attributes: ["name"],
        as: "Category",
    },
    // {
    //     model: models.ProductDetail,
    //     attributes : ["size", "color", "quan_in_stock"],
    //     as: "ProductDetail",
    // },
    // {
    //     model: models.ProductImage,
    //     attributes : ["image"],
    //     as: "ProductImage",
    // }
];

async function index(startIndex, limit, params) {
    const conditions = [];

    if (params.txt_search) {
        conditions.push(
            objectCleaner.clean({
                product_name: { [Op.like]: `%${params.txt_search}%` },
                description: { [Op.like]: `%${params.txt_search}%` },
                fromCity: { [Op.like]: `%${params.txt_search}%` },
                origin: { [Op.like]: `%${params.txt_search}%` },
            })
        );
    }

    // if (params.categoryInfo) {
    //     conditions.push(
    //         objectCleaner.clean({
    //             "$Category.name$": { [Op.like]: `%${params.categoryInfo}%` },
    //             category_id: params.categoryInfo,
    //         })
    //     );
    // }

    conditions.filter(array => array.length > 0)
    
    
    let selection = {}

    if (conditions.length > 0) {
        selection[Op.or] = conditions;
    }
    
    selection = objectCleaner.clean({
        // ...selection,
        product_name : params.txt_search ? { [Op.like]: `%${params.txt_search}%` } : null,
        discount: params.isDiscount ? { [Op.gt]: 0 } : null,
        isMall: params.isMall ? { [Op.is]: true } : null,
        price: params.price_from
            ? params.price_to
                ? { [Op.between]: [params.price_from, params.price_to] }
                : { [Op.gt]: params.price_from }
            : params.price_to
            ? { [Op.lt]: params.price_to }
            : null,
        star: params.star_from
            ? params.star_to
                ? { [Op.between]: [params.star_from, params.star_to] }
                : { [Op.gt]: params.star_from }
            : params.star_to
            ? { [Op.lt]: params.star_to }
            : null,
        deletedAt: { [Op.eq]: null },
    });
    
    // console.log(selection);

    return models.Product.findAndCountAll(
        objectCleaner.clean({
            include: include,
            offset: Number.isNaN(startIndex) ? null : startIndex,
            limit: Number.isNaN(limit) ? null : limit,
            order: [
                ["id", "ASC"],
                ["category_id", "ASC"],
                ["product_name", "DESC"],
                ["price", "DESC"],
                ["star", "DESC"],
                ["likes", "DESC"],
                ["discount", "DESC"],
            ],
            where: selection,
        })
    );
}

async function showById(id) {
    return models.Product.findByPk(id);
}

async function showByCategoryId(categoryId) {
    return models.Product.findAndCountAll({
        where: { category_id: categoryId },
    });
}

async function create(newProduct) {
    return models.Product.create(newProduct);
}

async function update(updateProduct, id) {
    return models.Product.update(updateProduct, { where: { id: id } });
}

async function destroy(id) {
    const now = getCurrentDateTime();

    // Update deletedAt field of user
    const updateProduct = {
        deletedAt: now,
    };
    await update(updateProduct, id);
}

module.exports = {
    getListProduct: index,
    getProductById: showById,
    getProductByCategoryId: showByCategoryId,
    addNewProduct: create,
    updateProductById: update,
    softDeleteProductById: destroy,
};

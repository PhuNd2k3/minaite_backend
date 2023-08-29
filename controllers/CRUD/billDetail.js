const { Op } = require("sequelize");
const models = require(process.cwd() + "/models");
const { getCurrentDateTime } = require(process.cwd() + "/helpers/datetime");
const objectCleaner = require("../../helpers/object-cleaner");

const include = [
    {
        model: models.ProductDetail,
        include: [
            {
                model: models.Product,
                include: [
                    {
                        model: models.ProductImage,
                        attributes: ['image'],
                        required: true,
                    },
                    {
                        model: models.Category,
                        attributes: ["name"],
                        as: "Category",
                        required: true,
                    },
                ],
                attributes: ['product_name','price','discount'],
                required: true,
            },
        ],
        required: true,
        attributes: ['size','color'],
    },
]

async function showByBillId(BillId)
{
    return models.BillDetal.findAndCountAll({
        where: {
            bill_id : BillId,
            deletedAt: { [Op.eq]: null },
        },
        include : include
    })
}

async function showById(id) {
    return models.BillDetal.findByPk(id);
}

async function create(newBillDetal) {
    return models.BillDetal.create(newBillDetal);
}

async function update(updateBillDetal, id) {
    return models.BillDetal.update(updateBillDetal, { where: { id: id } });
}

async function destroy(id) {
    const now = getCurrentDateTime();

    const updateBillDetal = {
        deletedAt: now,
    };
    await update(updateBillDetal, id);
}

module.exports = {
    getBillDetalById: showById,
    addNewBillDetal: create,
    updateBillDetalById: update,
    softDeleteBillDetalById: destroy,
    getBillDetalByBillId : showByBillId
};

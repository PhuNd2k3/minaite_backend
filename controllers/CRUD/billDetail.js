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
    }
]

const include2 = [
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
    {
        model : models.Bill,
        as : "Bill",
        require : true,
    }
]

async function showByBillId(BillId)
{
    return models.BillDetail.findAndCountAll({
        where: {
            bill_id : BillId,
            deletedAt: { [Op.eq]: null },
        },
        include : include
    })
}

async function showByUserId(UserId,startIndex, limit)
{
    return models.BillDetail.findAll(
        objectCleaner.clean({
            offset: Number.isNaN(startIndex) ? null : startIndex,
            limit: Number.isNaN(limit) ? null : limit,
            where : {
                "$Bill.user_id$" : UserId,
                "$Bill.deletedAt$" : {[Op.eq] : null}, 
            },
            include : include2,
        })
    )
}

async function showById(id) {
    return models.BillDetail.findByPk(id);
}

async function create(newBillDetail) {
    return models.BillDetail.create(newBillDetail);
}

async function update(updateBillDetail, id) {
    return models.BillDetail.update(updateBillDetail, { where: { id: id } });
}

async function destroy(id) {
    const now = getCurrentDateTime();

    const updateBillDetail = {
        deletedAt: now,
    };
    await update(updateBillDetail, id);
}

module.exports = {
    getBillDetailById: showById,
    addNewBillDetail: create,
    updateBillDetailById: update,
    softDeleteBillDetailById: destroy,
    getBillDetailByBillId : showByBillId,
    getBillDetailByUserId : showByUserId
};

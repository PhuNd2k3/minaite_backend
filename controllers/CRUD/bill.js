const { Op } = require("sequelize");
const models = require(process.cwd() + "/models");
const { getCurrentDateTime } = require(process.cwd() + "/helpers/datetime");
const objectCleaner = require("../../helpers/object-cleaner");

async function showByUserId(userId)
{
    return models.Bill.findAndCountAll({
        where: {
            user_id : userId,
            deletedAt: { [Op.eq]: null },
        }
    })
}

async function showById(id) {
    return models.Bill.findByPk(id);
}

async function create(newBill) {
    return models.Bill.create(newBill);
}

async function update(updateBill, id) {
    return models.Bill.update(updateBill, { where: { id: id } });
}

async function destroy(id) {
    const now = getCurrentDateTime();

    const updateBill = {
        deletedAt: now,
    };
    await update(updateBill, id);
}

module.exports = {
    getBillById: showById,
    addNewBill: create,
    updateBillById: update,
    softDeleteBillById: destroy,
    getBillByUserId : showByUserId
};

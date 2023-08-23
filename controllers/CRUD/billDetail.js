const { Op } = require("sequelize");
const models = require(process.cwd() + "/models");
const { getCurrentDateTime } = require(process.cwd() + "/helpers/datetime");
const objectCleaner = require("../../helpers/object-cleaner");


async function showByBillId(billId) {
    return models.BillDetail.findAndCountAll({
        where : {
            bill_id : billId
        },
        order: [
            ["id", "ASC"],
            ["createdAt", "DESC"]
        ],
    })
}

module.exports = {
    showDetailsByBillId : showByBillId,
}
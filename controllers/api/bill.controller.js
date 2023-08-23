const validators = require("../../helpers/validators")
const { showByUserId, showBillById } = require("../CRUD/bill")
const { showDetailsByBillId } = require("../CRUD/billDetail")

async function getBillInfoByUserId(request, response) {
    try {
        const userId = request.params.id

        const queryResult = await showByUserId(userId)

        return response.status(200).json(queryResult)
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function getInfoBillByBillId(request, response){
    try {
        const BillId = response.params.id

        const queryResultBillDetail = await showDetailsByBillId(BillId)
        const queryResultBill = await showBillById(BillId)

        const result = {...queryResultBill, billDetails : queryResultBillDetail}

        return response.status(200).json(result)
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

module.exports = {
    getBillInfoByUserId : getBillInfoByUserId,
    getInfoBillByBillId : getInfoBillByBillId
}
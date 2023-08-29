const validators = require("../../helpers/validators")

const {
    addNewBill,
    getBillById,
    getBillByUserId,
    softDeleteBillById,
    updateBillById
} = require("../CRUD/bill")

const {
    addNewBillDetal,
    getBillDetalByBillId,
    getBillDetalById,
    softDeleteBillDetalById,
    updateBillDetalById
} = require("../CRUD/billDetail")
const jwt = require("jsonwebtoken");

async function getByUserId(request, response)
{
    try {
        const token = request.headers.authorization.split(" ")[1];
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const bill = await getBillById(decode.id);
        if (bill.length === 0) {
            return response.status(201).json({
                message: "This user has bill",
                bill: bill,
            });
        }

        


        return response.status(200).json({ message: "Success!", cart: cart });
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        })
    }
}

async function addBill(request, response)
{
    try {
        
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        })
    }
}

async function updateBill(request, response)
{
    try {
        
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        })
    }
}

async function deleteById(request, response)
{
    try {
        const bill = await getBillById(request.params.billId)
        if(!bill)
            return response.status(403).json({
                message : "Can't find this bill"
            })
        if (bill.deletedAt) {
            return response
                .status(404)
                .json({ message: "This bill has been deleted" });
        }
        softDeleteCartById(request.params.cartId)

        return response.status(200).json({
            message: "Delete bill successfully!",
        })
        
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        })
    }
}

module.exports = 
{
    getByUserId : getByUserId,
    addBill : addBill,
    updateBill : updateBill,
    deleteById : deleteById,
}
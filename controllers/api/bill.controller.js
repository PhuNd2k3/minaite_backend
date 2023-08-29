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
        const dbBill = await getBillByUserId(decode.id);
        
        if (dbBill.rows.length === 0) {
            return response.status(201).json({
                message: "This user has bill",
                bill: dbBill,
            });
        }
        
        for(let i = 0 ; i < dbBill.rows.length; i++)
        {
            let element = dbBill.rows[i];

            const queryBillDetail = await getBillDetalByBillId(element.dataValues.id);

            element.dataValues.details = queryBillDetail.rows
        }
        return response.status(200).json(dbBill);
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
        const token = request.headers.authorization.split(" ")[1];
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const newBill = {
            recipient_info : request.body.recipient_info,
            user_id : decode.id,
            payment_method : request.body.payment_method,
            transport_method : request.body.transport_method,
            book_status : request.body.book_status,
            ship_status : request.body.ship_status,
            ship_money : request.body.ship_money,
            ship_discount : request.body.ship_discount,
            Bill_money : request.body.Bill_money,
            Bill_discount : request.body.Bill_discount,
            total_price : request.body.total_price,
        }
        
        // Xử lý total_money, shipMoney ( tính theo số km )

        const details = request.body.details

        if(details.length === 0)
        {
            return response.status(400).json({
                message : "bill details not found"
            })
        }

        const validateResponse = validators.validateBill(newBill);
        if (validateResponse !== true)
            return response.status(400).json({
                message: `validation failed!`,
                error: validateResponse,
        });

        const dbNewBill = await addNewBill(newBill)

        for(var detail in details){
            const newBilldetail = {
                Bill_detail_id : detail.Bill_detail_id,
                bill_id : dbNewBill.id,
                quantity : detail.quantity,
                total_price : detail.total_price
            }

            const validateResponseBillDetail = validators.validateBillDetail(newBilldetail)
            if(validateResponseBillDetail !== true)
            {
                return response.status(400).json({
                    message : "validation bill detail failed",
                    error : validateResponseBillDetail
                })
            }

            await addNewBillDetal(newBilldetail)
        }

        return response.status(200).json({
            message : "Create bill successfull!",
            id : dbNewBill.id,
        })
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
        const billId = request.params.id;
        const dbBill = await getBillById(BillId);

        if (dbBill) {

            const updateBill = {
                recipient_info : request.body.recipient_info,
                user_id : decode.id,
                payment_method : request.body.payment_method,
                transport_method : request.body.transport_method,
                book_status : request.body.book_status,
                ship_status : request.body.ship_status,
                ship_money : request.body.ship_money,
                ship_discount : request.body.ship_discount,
                Bill_money : request.body.Bill_money,
                Bill_discount : request.body.Bill_discount,
                total_price : request.body.total_price,
            }

            const validateResponse =
                validators.validateBill(updateBill);

            if (validateResponse !== true)
                return response.status(400).json({
                    message: "validated failed!",
                    error: validateResponse,
                });

            updateBillById(updateBill, billId).then(() =>
                response.status(200).json({
                    message: "Update Bill successfull !",
                })
            );
        } else {
            return response.status(404).json({
                message: "Bill type not found!",
            });
        }
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
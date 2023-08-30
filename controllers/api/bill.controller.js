const validators = require("../../helpers/validators")

const {
    addNewBill,
    getBillById,
    getBillByUserId,
    softDeleteBillById,
    updateBillById
} = require("../CRUD/bill")

const {
    addNewBillDetail,
    getBillDetailByBillId,
    getBillDetailById,
    softDeleteBillDetailById,
    updateBillDetailById,
    getBillDetailByUserId
} = require("../CRUD/billDetail")
const jwt = require("jsonwebtoken");

const {
    showUserById
} = require("../CRUD/user")

async function getByUserId(request, response)
{
    try {
        const token = request.headers.authorization.split(" ")[1];
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const page = Number.parseInt(request.query.page);
        const limit = Number.parseInt(request.query.limit);

        const startIndex = (page - 1) * limit;

        const dbBill = await getBillByUserId(decode.id, startIndex, limit);
        
        if (dbBill.rows.length === 0) {
            return response.status(201).json({
                message: "This user has no bill",
                bill: dbBill,
            });
        }
        
        for(let i = 0 ; i < dbBill.rows.length; i++)
        {
            let element = dbBill.rows[i];

            const queryBillDetail = await getBillDetailByBillId(element.dataValues.id);
            // console.log(element.dataValues.id)

            element.dataValues.billDetails = queryBillDetail.rows
        }
        return response.status(200).json(dbBill);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        })
    }
}

async function showBillDetailByUserId(request, response)
{
    try {
        const token = request.headers.authorization.split(" ")[1];
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const page = Number.parseInt(request.query.page);
        const limit = Number.parseInt(request.query.limit);

        const startIndex = (page - 1) * limit;

        const dbBill = await getBillDetailByUserId(decode.id,startIndex, limit);
        // console.log(dbBill.length)
        

        if (dbBill.length === 0) {
            return response.status(201).json({
                message: "This user has billDetail",
                bill: dbBill,
            });
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

        const queryCus = showUserById(decode.id)

        
        const newBill = {
            // recipient_info : request.body.recipient_info,
            user_id : decode.id,
            // payment_method : request.body.payment_method,
            // transport_method : request.body.transport_method,
            // book_status : request.body.book_status,
            // ship_status : request.body.ship_status,
            // ship_money : request.body.ship_money,
            // ship_discount : request.body.ship_discount,
            product_money : request.body.product_money,
            // product_discount : request.body.product_discount,
            // total_price : request.body.total_price,
            
            // Fixed dữ liệu
            payment_method : "Thanh toán khi nhận hàng",
            transport_method : "Vận chuyển nhanh",
            book_status : "Chưa thanh toán",
            ship_status : "Đang vận chuyển",
            ship_money : 32000,
            ship_discount : 0,
            product_discount : 0,
            total_price : (request.body.product_money + 32000),
            recipient_info : queryCus.name
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

        for(let i = 0 ; i < details.length ; i ++){
            const detail = details[i]
            const newBilldetail = {
                product_detail_id : detail.product_detail_id,
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

            await addNewBillDetail(newBilldetail)
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
        const dbBill = await getBillById(billId);

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
                product_money : request.body.product_money,
                product_discount : request.body.product_discount,
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
        const bill = await getBillById(request.params.id)
        if(!bill)
            return response.status(403).json({
                message : "Can't find this bill"
            })
        if (bill.deletedAt) {
            return response
                .status(404)
                .json({ message: "This bill has been deleted" });
        }
        softDeleteBillById(request.params.id)

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
    getBillDetailByUserId : showBillDetailByUserId,
    addBill : addBill,
    updateBill : updateBill,
    deleteById : deleteById,
}
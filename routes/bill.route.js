const express = require("express");
const billController = require("../controllers/api/bill.controller")

const router = express.Router();

router.get('/all_bill', billController.getByUserId)

router.get('/all_billDetail', billController.getBillDetailByUserId)

router.post('/', billController.addBill)

router.patch('/:id', billController.updateBill)

router.delete('/:id', billController.deleteById)

module.exports = router;
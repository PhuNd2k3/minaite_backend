
const express = require('express')

const billController = require('../controllers/api/bill.controller')

const router = express.Router()

router.get("/infoByUser/:id", billController.getBillInfoByUserId)

router.get("/infoBill/:id", billController.getBillInfoByUserId)

module.exports = router;

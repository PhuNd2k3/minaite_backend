const express = require('express');
const adminController = require('../controllers/api/admin.controller')

const router = express.Router();

router.get('/all-user',adminController.getAllUser)

router.get('/all-review',adminController.getAllReview)

router.get('/all-product',adminController.getAllProduct)

module.exports  = router
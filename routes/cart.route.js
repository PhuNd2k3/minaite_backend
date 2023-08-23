const express = require('express');
const cartController = require('../controllers/api/cart.controller')

const router = express.Router();

router.post('/add-to-cart', cartController.add)

router.get('/user-cart/:userId', cartController.getByUserId)

router.patch('/update-cart', cartController.update)

module.exports = router;
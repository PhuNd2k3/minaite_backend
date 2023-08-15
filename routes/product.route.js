const express = require('express');
const ProductApiControllers = require('../controllers/api/product.controller')
const router = express.Router();

router.get('/', ProductApiControllers.getListProduct)

router.get('/sale/', ProductApiControllers.getSaleProducts)

router.get('/info/:id', ProductApiControllers.getProductInfo)

router.get('/:id', ProductApiControllers.getProductById)

router.get('/category/:id', ProductApiControllers.getProductByCategoryId)

router.post('/', ProductApiControllers.createNewProduct)

router.patch('/:id', ProductApiControllers.updateById)

router.delete('/:id', ProductApiControllers.softDeleteById)

module.exports = router
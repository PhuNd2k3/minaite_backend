const express = require('express');
const CategoryApiControllers = require('../controllers/api/category.controller');
const { route } = require('./auth.route');

const router = express.Router();

router.get('/',CategoryApiControllers.index);

router.get('/:id',CategoryApiControllers.showById)

router.post('/',CategoryApiControllers.create)

router.patch('/:id',CategoryApiControllers.updateById)

router.delete('/:id',CategoryApiControllers.softDeleteById)

module.exports = router
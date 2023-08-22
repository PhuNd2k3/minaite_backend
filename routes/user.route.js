const express = require('express');
const userController = require('../controllers/api/user.controller')

const router = express.Router();

router.get('/profile/:userId',userController.getUserById)

module.exports  = router
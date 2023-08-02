// routes/auth.js
const express = require('express');

const router = express.Router();
const authController = require('../controllers/auth')


const dotenv = require('dotenv');
dotenv.config();


router.post('/login', authController.login);

router.post('/register', authController.register)

module.exports = router;

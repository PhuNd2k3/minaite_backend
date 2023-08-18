const express = require('express');
const feedbackController = require('../controllers/api/feedback.controller')

const router = express.Router();

router.post('/create-feedback', feedbackController.create);

router.get('/get-by-product/:productId', feedbackController.getByProctId)

module.exports = router;

const express = require("express");
const feedbackController = require("../controllers/api/feedback.controller");
const checkRoleMiddleware = require("../middleware/check-role");

const router = express.Router();

router.post(
  "/create-feedback",
  checkRoleMiddleware.checkRoleUser,
  feedbackController.create
);

router.get("/get-by-product/:productId", feedbackController.getByProctId);

module.exports = router;

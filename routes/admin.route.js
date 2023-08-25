const express = require("express");
const adminController = require("../controllers/api/admin.controller");
const checkRoleMiddleware = require("../middleware/check-role");

const router = express.Router();

router.get(
  "/all-user",
  checkRoleMiddleware.checkRoleAdmin,
  adminController.getAllUser
);

router.get(
  "/all-review",
  checkRoleMiddleware.checkRoleAdmin,
  adminController.getAllReview
);

router.get(
  "/all-product",
  checkRoleMiddleware.checkRoleAdmin,
  adminController.getAllProduct
);

module.exports = router;

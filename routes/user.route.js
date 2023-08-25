const express = require("express");
const userController = require("../controllers/api/user.controller");
const checkRoleMiddleware = require("../middleware/check-role");

const router = express.Router();

router.get(
  "/profile",
  checkRoleMiddleware.checkRoleUser,
  userController.getUserById
);

module.exports = router;

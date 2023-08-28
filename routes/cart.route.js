const express = require("express");
const cartController = require("../controllers/api/cart.controller");
const checkRoleMiddleware = require("../middleware/check-role");

const router = express.Router();

router.post(
  "/add-to-cart",
  checkRoleMiddleware.checkRoleUser,
  cartController.add
);

router.get(
  "/user-cart",
  checkRoleMiddleware.checkRoleUser,
  cartController.getByUserId
);

router.patch(
  "/update-cart",
  checkRoleMiddleware.checkRoleUser,
  cartController.update
);

router.delete(
  "/delete-cart-item/:cartId",
  checkRoleMiddleware.checkRoleUser,
  cartController.deleteById
);

module.exports = router;

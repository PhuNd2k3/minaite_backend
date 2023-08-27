const express = require("express");
const cartController = require("../controllers/api/cart.controller");

const router = express.Router();

router.post("/add-to-cart", cartController.add);

router.get("/user-cart", cartController.getByUserId);

router.patch("/update-cart", cartController.update);

router.delete("/delete-cart-item/:cartId", cartController.deleteById);

module.exports = router;

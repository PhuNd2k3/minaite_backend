const validators = require("../../helpers/validators");
const {
  addNewCart,
  getAllByUserId,
  updateCartById,
  getByCartId,
  softDeleteCartById,
} = require("../CRUD/cart");

const jwt = require("jsonwebtoken");
const models = require(process.cwd() + "/models");
const ProductDetail = models.ProductDetail;
const Product = models.Product;

async function add(request, response) {
  try {
    const token = request.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const newCart = {
      user_id: decode.id,
      product_detail_id: request.body.product_detail_id,
      quantity: request.body.quantity,
    };
    const productDetail = await ProductDetail.findOne({
      where: { id: newCart.product_detail_id },
      include: [
        {
          model: Product,
          required: true,
          right: true,
        },
      ],
    });
    if (newCart.quantity > productDetail.quan_in_stock) {
      return response.status(402).json({
        message: "Exceed the quantity in stock",
      });
    }
    const unitPrice =
      productDetail.Product.price * (1 - productDetail.Product.discount / 100);
    newCart["total_price"] = newCart.quantity * unitPrice;

    //Validate new Cart's data
    const validateResponse = validators.validateCart(newCart);
    if (validateResponse !== true) {
      return response.status(400).json({
        message: "Validation failed!",
        errors: validateResponse,
      });
    }

    // Add new feedback to database
    addNewCart(newCart)
      .then(() => {
        return response.status(200).json({
          message: "Add to cart successfully!",
        });
      })
      .catch((error) => {
        return response.status(401).json({
          message: "Add to cart fail!",
          error: error,
        });
      });
  } catch (error) {
    return response.status(500).json({
      message: "Something went wrong!",
      error: error,
    });
  }
}

//[Sprint_2] [BE] [Chi tiết sản phẩm] Viết API get sản phẩm trong giỏ hàng của 1 user
async function getByUserId(request, response) {
  try {
    const token = request.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const cart = await getAllByUserId(decode.id);
    if (cart.length === 0) {
      return response
        .status(201)
        .json({ message: "This user has no products in the cart", cart: cart });
    }
    return response.status(200).json({ message: "Success!", cart: cart });
  } catch (error) {
    return response.status(500).json({
      message: "Something went wrong!",
      error: error,
    });
  }
}

async function update(request, response) {
  try {
    if (request.body.quantity < 0) {
      return response.status(402).json({ message: "Invalid quantity!" });
    }
    const updateCart = {
      quantity: request.body.quantity,
    };
    const cart = await getByCartId(request.body.id);
    if (!cart) {
      return response.status(403).json({ message: "Can't find this cart" });
    }
    if (cart.deletedAt) {
      return response
        .status(404)
        .json({ message: "This cart has been deleted" });
    }
    updateCartById(updateCart, request.body.id)
      .then(() => {
        return response.status(200).json({
          message: "Update cart successfully!",
        });
      })
      .catch((error) => {
        return response.status(401).json({
          message: "Update cart fail! Maybe exceed the quantity in stock",
          error: error,
        });
      });
  } catch (error) {
    return response.status(500).json({
      message: "Something went wrong!",
      error: error,
    });
  }
}

async function deleteById(request, response) {
  try {
    const cart = await getByCartId(request.params.cartId);
    if (!cart) {
      return response.status(403).json({ message: "Can't find this cart" });
    }
    if (cart.deletedAt) {
      return response
        .status(404)
        .json({ message: "This cart has been deleted" });
    }

    softDeleteCartById(request.params.cartId)
      .then(() => {
        return response.status(200).json({
          message: "Delete cart successfully!",
        });
      })
      .catch((error) => {
        return response.status(401).json({
          message: "Delete failed!",
          error: error,
        });
      });
  } catch (error) {
    return response.status(500).json({
      message: "Something went wrong!",
      error: error,
    });
  }
}

module.exports = {
  add: add,
  getByUserId: getByUserId,
  update: update,
  deleteById: deleteById,
};

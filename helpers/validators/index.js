const FastestValidator = require('fastest-validator')
const validator = new FastestValidator()

// Schemas
const schemas = require('./schemas')

// Validate functions
const validateUser = (user) => validator.validate(user, schemas.userSchema)
const validateWallet = (wallet) => validator.validate(wallet, schemas.walletSchema)
const validateCategory = (category) => validator.validate(category, schemas.categorySchema)
const validateProduct = (product) => validator.validate(product, schemas.productSchema)
const validateFeedBack = (feedback) => validator.validate(feedback, schemas.feedbackSchema)
const validateCart = (cart) => validator.validate(cart, schemas.cartSchema)
const validateImage = (productImage) => validator.validate(productImage , schemas.productImage)
const validateProductDetail = (productDetail) => validator.validate(productDetail , schemas.productDetail)



module.exports = {
    validateUser: validateUser,
    validateWallet : validateWallet,
    validateCategory : validateCategory,
    validateProduct : validateProduct,
    validateImage : validateImage,
    validateProductDetail : validateProductDetail,
    validateFeedBack: validateFeedBack,
    validateCart: validateCart,
}

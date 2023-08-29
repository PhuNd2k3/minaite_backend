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
const validateBill = (bill) => validator.validate(bill, schemas.billSchema)
const validateBillDetail = (billDetail) => validator.validate(billDetail, schemas.billDetailSchema)

module.exports = {
    validateUser: validateUser,
    validateWallet : validateWallet,
    validateCategory : validateCategory,
    validateProduct : validateProduct,
    validateFeedBack: validateFeedBack,
    validateCart : validateCart,
    validateBill : validateBill,
    validateBillDetail : validateBillDetail 
}

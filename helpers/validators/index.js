const FastestValidator = require('fastest-validator')
const validator = new FastestValidator()

// Schemas
const schemas = require('./schemas')
const category = require('../../controllers/CRUD/category')

// Validate functions
const validateUser = (user) => validator.validate(user, schemas.userSchema)
const validateWallet = (wallet) => validator.validate(wallet, schemas.walletSchema)
const validateCategory = (category) => validator.validate(category, schemas.categorySchema)
const validateProduct = (product) => validator.validate(product, schemas.productSchema)


module.exports = {
    validateUser: validateUser,
    validateWallet : validateWallet,
    validateCategory : validateCategory,
    validateProduct : validateProduct,
}

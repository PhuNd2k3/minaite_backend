const auth = require('./auth.route')
const feedback = require('./feedback.route')
const cart = require('./cart.route')
const product = require('./product.route')
const category = require('./category.route')
const admin = require('./admin.route')
const user = require('./user.route')
const bill = require('./bill.route')

module.exports = {
    auth: auth,
    feedback: feedback,
    cart: cart,
    product : product,
    category : category,
    admin: admin,
    user: user,
    bill : bill,
}

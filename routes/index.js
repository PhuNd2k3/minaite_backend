const auth = require('./auth.route')
const feedback = require('./feedback.route')
const cart = require('./cart.route')
const product = require('./product.route')
const category = require('./category.route')


module.exports = {
    auth: auth,
    feedback: feedback,
    cart: cart,
    product : product,
    category : category
}

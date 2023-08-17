const auth = require('./auth.route')
const feedback = require('./feedback.route')
const cart = require('./cart.route')

module.exports = {
    auth: auth,
    feedback: feedback,
    cart: cart,
}

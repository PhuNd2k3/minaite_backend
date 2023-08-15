const auth = require('./auth.route')
const product = require('./product.route')
const category = require('./category.route')
const feedback = require('./feedback.route')

module.exports = {
    auth: auth,
    product : product,
    category : category,
    feedback: feedback,
}

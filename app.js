const express = require('express')
const cors = require('cors')

const routes = require('./routes')

const app = express()

app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000', 'http://localhost:3001'],
    }),
)

app.use(express.json());

app.use('/public', express.static('public'))

app.use('/api/auth', routes.auth)

app.use('/api/product', routes.product)

app.use('/api/category',routes.category)

app.use('/api/feedback', routes.feedback)

app.use('/api/cart', routes.cart)

app.use('/api/bill', routes.bill)

module.exports = app
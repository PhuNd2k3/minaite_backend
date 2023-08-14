const express = require('express')
const cors = require('cors')

const routes = require('./routes/index')

const app = express()

app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000', 'http://localhost:3001'],
    }),
)

// Database
// const db = require("./models");

// // db.sequelize
// //     .sync()
// //     .then(() => {
// //         console.log("Synced db.");
// //     })
// //     .catch((err) => {
// //         console.log("Failed to sync db: " + err.message);
// //     });


app.use(express.json());

app.use('/public', express.static('public'))

app.use('/api/auth', routes.auth)
// app.use('/api/products', routes.product)
// app.use('/api/category',routes.category)

module.exports = app
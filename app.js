// var express = require('express');
// var app = express();


// app.get('/api', function(req, res){
//    res.send("Hello world!");
// });

// app.listen(3000, () => {
//    console.log("Listening on port 3000");
// });

const express = require('express')
const cors = require('cors')

const routes = require('./routes/index')

const db = require("./models");

db.sequelize
    .sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

const app = express()

app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000', 'http://localhost:3001'],
    }),
)

app.use(express.json())

app.use('/api/auth', routes.auth)

module.exports = app
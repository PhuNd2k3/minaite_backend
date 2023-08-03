const fs =require('fs')
const env = process.env.NODE_ENV || 'development'
const dbConfig = require("../config/db.config.js")[env]
const path = require('path')
const Sequelize = require("sequelize");
const basename = path.basename(__filename)
const db = {}

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

fs.readdirSync(__dirname)
    .filter((file) => {
        return (
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js'
        )
    })
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(
            sequelize,
            Sequelize.DataTypes,
        )
        db[model.name] = model
    })

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db)
    }
})    

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.Users = require("./users.js")(sequelize, Sequelize);

module.exports = db;
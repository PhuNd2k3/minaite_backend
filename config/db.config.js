module.exports = {
  "development" : {
    HOST: "localhost",
    USER: "postgres",
    // PASSWORD: "dung1702",
    PASSWORD: "admin",
    DB: "shopee",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
  }
};
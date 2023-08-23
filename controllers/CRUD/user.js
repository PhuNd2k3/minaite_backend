const { Op } = require('sequelize')
const models = require(process.cwd() + '/models')
const { getCurrentDateTime } = require(process.cwd() + '/helpers/datetime')
const jwt = require("jsonwebtoken")

// const include = [
//     {
//         model: models.Wallets,
//         attributes:['shopee_pay_money'],
//     },
// ]

async function showById(id) {
    return models.User.findByPk(id, { include: include })
}

async function decodeToken(token)
{
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
}

async function showByEmail(email) {
    return models.User.findOne({ 
        //include: include, 
        where: { email: email } })
}

async function create(newUser) {
    return models.User.create(newUser)
}

async function update(updateUser, id) {
    return models.User.update(updateUser, { where: { id: id } })
}

async function destroy(id) {
    const now = getCurrentDateTime()

    const updateUser = {
        deletedAt: now,
    }
    await update(updateUser, id)
}

module.exports = {
    getUserById: showById,
    getUserByEmail: showByEmail,
    addNewUser: create,
    updateUserById: update,
    softDeleteUserById: destroy,
    decodeToken : decodeToken
}

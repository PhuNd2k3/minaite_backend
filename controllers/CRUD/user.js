const { Op } = require('sequelize')
const models = require(process.cwd() + '/models')
const { getCurrentDateTime } = require(process.cwd() + '/helpers/datetime')

async function showById(id) {
    return models.User.findByPk(id, { include: include })
}

async function showByEmail(email) {
    return models.User.findOne({ 
        where: { email: email } })
}

async function create(newUser) {
    return models.User.create(newUser)
}

async function decodeToken(token)
{
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
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

async function showAllUser(){
    return await models.User.findAll({
        where: {
            deletedAt: null,
        },
        attributes: ['id', 'name', 'gender', 'birthday', 'email', 'telephone', 'address', 'avatar_url'],
    })
}

async function showUserById(id){
    return await models.User.findByPk(id,{
        attributes: {
            exclude: ['password', 'isAdmin']
        }
    })
}

module.exports = {
    getUserById: showById,
    getUserByEmail: showByEmail,
    addNewUser: create,
    updateUserById: update,
    softDeleteUserById: destroy,
    showAllUser: showAllUser,
    showUserById: showUserById,
}

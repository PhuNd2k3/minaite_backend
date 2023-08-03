const { Op } = require('sequelize')
const models = require(process.cwd() + '/models')
const { getCurrentDateTime } = require(process.cwd() + '/helpers/datetime')
const objectCleaner = require(process.cwd() + '/helpers/object-cleaner')

const include = [
    // {
    //     model: models.Wallet,
    // },
]

// async function index(startIndex, limit, params) {
//     const selection = objectCleaner.clean({
//         [Op.or]: objectCleaner.clean({
//             name: { [Op.like]: `%${params.txt_search}%` },
//             email: { [Op.like]: `%${params.txt_search}%` },
//             '$UserInfo.phone_number$': { [Op.like]: `%${params.txt_search}%` },
//             '$UserInfo.address$': { [Op.like]: `%${params.txt_search}%` },
//         }),
//         deletedAt:
//             params.is_deleted !== ''
//                 ? params.is_deleted === '1'
//                     ? { [Op.not]: null }
//                     : { [Op.is]: null }
//                 : null,
//         role: params.role !== '' ? params.role : null,
//     })

//     return models.User.findAndCountAll({
//         include: include,
//         attributes: {
//             exclude: ['password'],
//         },
//         offset: startIndex,
//         limit: limit,
//         order: [
//             ['id', 'DESC'],
//             ['name', 'ASC'],
//         ],
//         where: selection,
//     })
// }

async function showById(id) {
    return models.User.findByPk(id, { include: include })
}

async function showByEmail(email) {
    return models.User.findOne({ include: include, where: { email: email } })
}

async function create(newUser) {
    return models.User.create(newUser)
}

async function update(updateUser, id) {
    return models.User.update(updateUser, { where: { id: id } })
}

async function destroy(id) {
    const now = getCurrentDateTime()

    // Update deletedAt field of user
    const updateUser = {
        deletedAt: now,
    }
    await update(updateUser, id)
}

// async function checkValid(id) {
//     const dbUser = await models.User.findOne({ where: { id: id } })
//     return {
//         is_valid: dbUser.is_verified && dbUser.deletedAt == null,
//         message: !dbUser.is_verified
//             ? 'This email is not verified yet!'
//             : 'This user was deleted!',
//     }
// }

module.exports = {
    //getListUsers: index,
    getUserById: showById,
    getUserByEmail: showByEmail,
    addNewUser: create,
    updateUserById: update,
    softDeleteUserById: destroy,
    //checkValidAccount: checkValid,
}

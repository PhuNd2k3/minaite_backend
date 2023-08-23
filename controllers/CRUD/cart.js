const models = require(process.cwd() + '/models')
const { getCurrentDateTime } = require(process.cwd() + '/helpers/datetime')
const { Op } = require('sequelize')

const include = [
    {
        model: models.ProductDetail,
        include: [
            {
                model: models.Product,
                attributes: ['product_name','price','discount'],
                required: true,
            },
        ],
        required: true,
        attributes: ['size','color','quan_in_stock'],
    }
]

async function showById(id) {
    return models.Cart.findByPk(id)
}

async function create(newCart) {
    return models.Cart.create(newCart)
}

async function update(updateCart, id) {
    if(updateCart.quantity == 0) {
        updateCart['deletedAt'] = getCurrentDateTime()
    }
    const cartDetail = await models.Cart.findByPk(id,{
        include: include,
        attributes: ['quantity', 'total_price']
    })

    updateCart['total_price'] = updateCart.quantity* cartDetail.ProductDetail.Product.price * (1 - cartDetail.ProductDetail.Product.discount / 100)

    return models.Cart.update(updateCart, { 
        where: {
            id: id,
        } })
}

async function destroy(id) {
    const now = getCurrentDateTime()

    const updateCart = {
        deletedAt: now,
    }
    return models.Cart.update(updateCart, { 
        where: {
            id: id,
        } })
}

async function getAllByUserId(userId){
    return await models.Cart.findAll({
        where: {user_id: userId },
        include: include,
    })
}


module.exports = {
    getByCartId: showById,
    addNewCart: create,
    getAllByUserId: getAllByUserId,
    updateCartById: update,
    softDeleteCartById: destroy,
}


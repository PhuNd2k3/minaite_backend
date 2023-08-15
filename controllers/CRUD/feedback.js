const models = require(process.cwd() + '/models')
const { getCurrentDateTime } = require(process.cwd() + '/helpers/datetime')

async function create(newFeedBack) {
    return models.FeedBack.create(newFeedBack)
}

async function update(updateFeedBack, id) {
    return models.FeedBack.update(updateFeedBack, { where: { id: id } })
}

async function destroy(id) {
    const now = getCurrentDateTime()

    const updateFeedBack = {
        deletedAt: now,
    }
    await update(updateFeedBack, id)
}

async function getAllByProctId(productId){
    return models.FeedBack.findAll({
        where: {product_id: productId}
    })
}


module.exports = {
    getAllByProctId: getAllByProctId,
    addNewFeedBack: create,
    updateFeedBackById: update,
    softDeleteFeedBackById: destroy,
}

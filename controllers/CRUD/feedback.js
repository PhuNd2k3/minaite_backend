const models = require(process.cwd() + '/models')
const { getCurrentDateTime } = require(process.cwd() + '/helpers/datetime')

const include = [
    {
        model: models.User,
        required: true,
        attributes: ['name','avatar_url'],
    }
]

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
        include: include,
        where: {product_id: productId}
    })
}

async function showAllReview(){
    return await models.FeedBack.findAll({
        where: {
            deletedAt: null,
        },
        attributes: {
            exclude: ['deletedAt', 'updatedAt','createdAt']
          }
    })
}

module.exports = {
    getAllByProctId: getAllByProctId,
    addNewFeedBack: create,
    updateFeedBackById: update,
    softDeleteFeedBackById: destroy,
    showAllReview: showAllReview,
}

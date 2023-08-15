const { addNewFeedBack } = require("../CRUD/feedback")
const { getAllByProctId } = require("../CRUD/feedback")
const validators = require("../../helpers/validators")

async function create(request, response) {
    try {
        const newFeedBack = {
            user_id: request.body.user_id,
            product_id: request.body.product_id,
            star: request.body.star,
            parent_id: request.body.parent_id,
            content: request.body.content,
        }
        
        // Validate new feedback's data
        const validateResponse = validators.validateFeedBack(newFeedBack)
        if (validateResponse !== true) {
            return response.status(400).json({
                message: 'Validation failed!',
                errors: validateResponse,
            })
        }

        // Add new feedback to database
        addNewFeedBack(newFeedBack)
        .then(() => {
            return response.status(200).json({
                message: 'Create feedback successfully!',
            })
        })
        .catch(() => {
            return response.status(401).json({
                message: 'Create feedback fail!',
            })
        })
        
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

async function getByProctId(request, response){
    try{
        const productId = request.params.productId
        const feedback = await getAllByProctId(productId)
        
        if(feedback.length === 0){
            return response.status(201).json({message: "This product have no feedback"})
        }

        response.status(200).json(feedback)
    }
    catch(error){
        response.status(400).json({ message: "Get data error: " + error })
    }
}

module.exports = {
    getByProctId: getByProctId,
    create: create,
}

const {showAllUser} = require('../CRUD/user')

const {showAllReview} = require('../CRUD/feedback')

const {getListProduct} = require('../CRUD/product')

async function getAllUser(request,  response) {
    try{
        const users = await showAllUser()
        return response.status(200).json({
            message: 'Success',
            users: users
        })
    }
    catch(error){
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

async function getAllReview(request, response) {
    try{
        const feedbacks = await showAllReview()
        return response.status(200).json({
            message: 'Success',
            feedbacks: feedbacks
        })
    }
    catch(error){
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

async function getAllProduct(request, response) {
    try{
        const page = Number.parseInt(request.query.page);
        const limit = Number.parseInt(request.query.limit);
        
        const startIndex = (page - 1) * limit;
        
        const params = {
            isMall : request.body.isMall ? request.body.isMall : false,
            txt_search : request.body.txt_search ? request.body.txt_search.trim() : '',
            categoryInfo : request.body.categoryInfo ? request.body.categoryInfo.trim() : '',
            isDiscount : request.body.isDiscount ? request.body.isDiscount : false,
            price_from : request.body.price_from ? request.body.price_from: null,
            price_to : request.body.price_to ? request.body.price_to : null,
            star_from : request.body.star_from ? request.body.star_from : null,
            star_to : request.body.star_to ? request.body.star_to : null,
        }
        const products = await getListProduct(startIndex, limit, params);

        products.rows.forEach(element => {
            if(element.discount > 0)
                element.price = Math.ceil(element.price * (100 - element.discount)/100)
        });
        
        products.count = products.rows.length
        return response.status(200).json({
            message: 'Success',
            products: products
        })
    }
    catch(error){
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

module.exports ={
    getAllUser: getAllUser,
    getAllReview: getAllReview,
    getAllProduct: getAllProduct,
}
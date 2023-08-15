const validators = require("../../helpers/validators");

const {
    getListProduct,
    getProductById,
    getProductByCategoryId,
    addNewProduct,
    updateProductById,
    softDeleteProductById,
} = require("../CRUD/product");

const {
    getDetailByProductById
} = require("../CRUD/productDetail")

const {
    getImageByProductById
} = require("../CRUD/productImage")

async function index(request, response) {
    try {
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
        // console.log(params)
        const queryResult = await getListProduct(startIndex, limit, params);
        
        queryResult.rows.forEach(element => {
            if(element.discount > 0)
                element.price = Math.ceil(element.price * (100 - element.discount)/100)
        });
        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function showById(request, response) {
    try {
        const productId = request.params.id;
        const queryResult = await getProductById(productId);

        if(queryResult.discount > 0)
            queryResult.price = Math.ceil(queryResult.price * (100 - queryResult.discount)/100)

        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function showByCategoryId(request, response) {
    try {
        const categoryId = request.params.id;
        const queryResult = await getProductByCategoryId(categoryId);

        queryResult.rows.forEach(element => {
            if(element.discount > 0)
                element.price = Math.ceil(element.price * (100 - element.discount)/100)
        });

        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function showSaleProducts(request, response) {
    try {
        const queryResult = await getListProduct(null,null,{isDiscount : true});

        queryResult.rows.forEach(element => {
            if(element.discount > 0)
                element.price = Math.ceil(element.price * (100 - element.discount)/100)
        });

        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function showProductInfo(request, response)
{
    const productId = request.params.id

}

async function create(request, response) {
    try {
        const newProduct = {
            category_id : request.body.category_id,
            product_name : request.body.product_name,
            price : request.body.price,
            description : request.body.description,
            likes : request.body.likes,
            star : request.body.star,
            quan_sold : request.body.quan_sold,
            quan_in_stock : request.body.quan_in_stock,
            origin : request.body.origin,
            fromCity : request.body.fromCity,
            isMall : request.body.isMall,
            discount : request.body.discount,
        }
        const validateResponse = validators.validateProduct(newProduct);
        if (validateResponse !== true)
            return response.status(400).json({
                message: `validation failed!`,
                error: validateResponse,
        });

        const dbNewProduct = addNewProduct(newProduct).then(()=>{
            response.status(200).json({
                message : "Create product successfull!",
                id : dbNewProduct.id,
            })
        })

    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function updateById(request, response) {
    try {
        const productId = request.params.id;
        const dbProduct = await getProductById(productId);

        if (dbProduct) {

            const updateProduct = {
                category_id : request.body.category_id,
                product_name : request.body.product_name,
                price : request.body.price,
                description : request.body.description,
                likes : request.body.likes,
                star : request.body.star,
                quan_sold : request.body.quan_sold,
                quan_in_stock : request.body.quan_in_stock,
                origin : request.body.origin,
                fromCity : request.body.fromCity,
                isMall : request.body.isMall,
                discount : request.body.discount,
            }

            const validateResponse =
                validators.validateProduct(updateProduct);

            if (validateResponse !== true)
                return response.status(400).json({
                    message: "validated failed!",
                    error: validateResponse,
                });

            updateProductById(updateProduct, productId).then(() =>
                response.status(200).json({
                    message: "Update product successfull !",
                })
            );
        } else {
            return response.status(404).json({
                message: "product type not found!",
            });
        }

    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function softDeleteById(request, response) {
    try {
        const productId = request.params.id;

        const dbproductId = await getProductById(productId);

        if (dbproductId) {
            await softDeleteProductById(productId);
            return response.status(200).json({
                message: "Delete product successfull",
            });
        } else
            return response.status(404).json({
                message: "product  not found!",
            });
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

module.exports = {
    getListProduct : index,
    getProductByCategoryId: showByCategoryId,
    getSaleProducts: showSaleProducts,
    getListProduct: index,
    getProductById: showById,
    getProductInfo : showProductInfo,
    createNewProduct: create,
    updateById: updateById,
    softDeleteById: softDeleteById,
};

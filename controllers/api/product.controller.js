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
    getDetailByProductById,
    addProductDetails,
} = require("../CRUD/productDetail")

const {
    getImageByProductById,
    addProductImage,
} = require("../CRUD/productImage")

async function index(request, response) {
    try {
        const page = Number.parseInt(request.query.page);
        const limit = Number.parseInt(request.query.limit);

        const startIndex = (page - 1) * limit;
        
        const params = {
            isMall : request.query.isMall ? request.query.isMall : false,
            txt_search : request.query.txt_search ? request.query.txt_search.trim() : '',
            categoryInfo : request.query.categoryInfo ? request.query.categoryInfo.trim() : '',
            isDiscount : request.query.isDiscount ? request.query.isDiscount : false,
            price_from : request.query.price_from ? request.query.price_from: null,
            price_to : request.query.price_to ? request.query.price_to : null,
            star_from : request.query.star_from ? request.query.star_from : null,
            star_to : request.query.star_to ? request.query.star_to : null,
            rangePrice : request.query.rangePrice ? request.query.rangePrice : null
        }
        const queryResult = await getListProduct(startIndex, limit, params);
    
        for(let i = 0 ; i < queryResult.rows.length;i++)
        {
            let element = queryResult.rows[i];
            // Process Sale price
            if(element.dataValues.discount > 0)
                element.dataValues.saleprice = Math.ceil(element.price * (100 - element.discount)/100)
            else
                element.dataValues.Saleprice = element.dataValues.price

                const queryProductDetail = await getDetailByProductById(element.dataValues.id)
                const queryProductImage = await getImageByProductById(element.dataValues.id)

            element.dataValues.details = queryProductDetail.rows
            element.dataValues.images = queryProductImage.rows
        }
        
        queryResult.count = queryResult.rows.length
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

        let element = queryResult;
            // Process Sale price
            if(element.dataValues.discount > 0)
                element.dataValues.saleprice = Math.ceil(element.price * (100 - element.discount)/100)
            else
                element.dataValues.Saleprice = element.dataValues.price

                const queryProductDetail = await getDetailByProductById(element.dataValues.id)
                const queryProductImage = await getImageByProductById(element.dataValues.id)

            element.dataValues.details = queryProductDetail.rows
            element.dataValues.images = queryProductImage.rows
        
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
        const categoryId = request.params.id
        const queryResult = await getProductByCategoryId(categoryId);

        for(let i = 0 ; i < queryResult.rows.length;i++)
        {
            let element = queryResult.rows[i];
            // Process Sale price
            if(element.dataValues.discount > 0)
                element.dataValues.saleprice = Math.ceil(element.price * (100 - element.discount)/100)
            else
                element.dataValues.Saleprice = element.dataValues.price

                const queryProductDetail = await getDetailByProductById(element.dataValues.id)
                const queryProductImage = await getImageByProductById(element.dataValues.id)

            element.dataValues.details = queryProductDetail.rows
            element.dataValues.images = queryProductImage.rows
        }

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

        for(let i = 0 ; i < queryResult.rows.length;i++)
        {
            let element = queryResult.rows[i];
            // Process Sale price
            if(element.dataValues.discount > 0)
                element.dataValues.saleprice = Math.ceil(element.price * (100 - element.discount)/100)
            else
                element.dataValues.Saleprice = element.dataValues.price

                const queryProductDetail = await getDetailByProductById(element.dataValues.id)
                const queryProductImage = await getImageByProductById(element.dataValues.id)

            element.dataValues.details = queryProductDetail.rows
            element.dataValues.images = queryProductImage.rows
        }

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
    try {
        const productId = request.params.id;
        const queryResult = await getProductById(productId);

        if(!queryResult)
            return response.status(400).json({
                message : "Can't find this product"
            })

        if(queryResult.discount > 0)
            queryResult.price = Math.ceil(queryResult.price * (100 - queryResult.discount)/100)
        
        const queryProductDetail = await getDetailByProductById(productId)
        const queryProductImage = await getImageByProductById(productId)
        
        const Result = {...queryResult.dataValues, productDetails : queryProductDetail.rows, productImages : queryProductImage.rows}

        return response.status(200).json(Result);

    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
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

        const images  = request.body.images
        const details = request.body.details

        if(images.length === 0)
        {
            return response.status(400).json({
                message : "Image not found"
            })
        }   

        if(details.length === 0)
        {
            return response.status(400).json({
                message : "product details not found"
            })
        }

        const validateResponse = validators.validateProduct(newProduct);
        if (validateResponse !== true)
            return response.status(400).json({
                message: `validation failed!`,
                error: validateResponse,
        });

        const dbNewProduct = await addNewProduct(newProduct)

        // console.log("id : " + dbNewProduct.id)

        for(var imageInfo in images){
            const newImage = {
                image : imageInfo,
                product_id : dbNewProduct.id
            }

            const validateResponseImage = validators.validateImage(newImage)
            if(validateResponseImage !== true)
            {
                return response.status(400).json({
                    message : "validation image failed",
                    error : validateResponseImage
                })
            }

            await addProductImage(newImage)
        }

        for(var i = 0; i < details.length; i++){
            const newProductDetail = {
                color : details[i].color,
                size : details[i].size,
                quan_in_stock : details[i].quantity,
                product_id : dbNewProduct.id
            }

            const validateResponseDetail = validators.validateProductDetail(newProductDetail)
            if(validateResponseDetail !== true)
            {
                return response.status(400).json({
                    message : "validation product's detail failed",
                    error : validateResponseDetail
                })
            }
             
            await addProductDetails(newProductDetail)
        }

        return response.status(200).json({
            message : "Create product successfull!",
            id : dbNewProduct.id,
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
                category_id : request.body.category_id ? request.body.category_id : dbProduct.category_id,
                product_name : request.body.product_name ? request.body.product_name : dbProduct.product_name,
                price : request.body.price ? request.body.price : dbProduct.price,
                description : request.body.description ? request.body.description : dbProduct.description,
                likes : request.body.likes ? request.body.likes : dbProduct.likes,
                star : request.body.star ? request.body.star : dbProduct.star,
                quan_sold : request.body.quan_sold ? request.body.quan_sold : dbProduct.quan_sold,
                quan_in_stock : request.body.quan_in_stock ? request.body.quan_in_stock : dbProduct.quan_in_stock,
                origin : request.body.origin ? request.body.origin : dbProduct.origin,
                fromCity : request.body.fromCity ? request.body.fromCity : dbProduct.fromCity,
                isMall : request.body.isMall ? request.body.isMall : dbProduct.isMall,
                discount : request.body.discount ? request.body.discount : dbProduct.discount,
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

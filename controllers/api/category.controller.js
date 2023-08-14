const validators = Require(process.cwd() + "/helpers/validators");

const {
    getListCategory,
    getCategoryById,
    addNewCategory,
    updateCategoryById,
    softDeleteUserById,
} = Require("../CRUD/category");

async function index(request, response) {
    try {
        
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

async function showById(request, response) {
    try {
        
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

async function create(request, response) {
    try {
        
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

async function updateById(request,response)
{
    try {
        
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

async function softDeleteById(request,response)
{
    try {
        
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

module.exports = {
    index : index,
    showById : showById,
    create : create,

}
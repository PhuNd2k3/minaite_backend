const validators = require("../../helpers/validators");

const {
    getListCategory,
    getCategoryById,
    addNewCategory,
    updateCategoryById,
    softDeleteCategoryById,
    checkCategoryExisted,
} = require("../CRUD/category");

async function index(request, response) {
    try {
        const page = Number.parseInt(request.query.page);
        const limit = Number.parseInt(request.query.limit);

        const startIndex = (page - 1) * limit;

        const params = {
            txt_search: request.body.txt_search
                ? request.body.txt_search.trim()
                : "",
            delete_to_date: request.body.delete_to_date
                ? request.body.delete_to_date.trim() + " 00:00:00"
                : null,
            delete_from_date: request.body.delete_from_date
                ? request.body.delete_from_date.trim() + " 00:00:00"
                : null,
            create_to_date: request.body.create_to_date
                ? request.body.create_to_date.trim() + " 00:00:00"
                : null,
            create_from_date: request.body.create_from_date
                ? request.body.create_from_date.trim() + " 00:00:00"
                : null,
        };

        const queryResult = await getListCategory(startIndex, limit, params);

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
        const categoryId = request.params.id;
        const queryResult = await getCategoryById(categoryId);

        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function create(request, response) {
    try {
        const categoryName = request.body.category_name;

        if (await checkCategoryExisted(categoryName))
            return response.status(400).json({
                message: `${categoryName} already exists !`,
            });

        // Chỗ này cần tải ảnh về và lưu lại trên máy
        const categoryImage = request.body.category_image;

        const newCategory = {
            name: categoryName,
            image: categoryImage,
        };

        const validateResponse = validators.validateCategory(newCategory);
        if (validateResponse !== true)
            return response.status(400).json({
                message: `validation failed!`,
                error: validateResponse,
            });

        const dbNewCategory = addNewCategory(newCategory).then(() =>
            response.status(200).json({
                message: "Create category successfully!",
                id : dbNewCategory.id,
            })
        );
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function updateById(request, response) {
    try {
        const categoryId = request.params.id;
        const dbCategory = await getCategoryById(categoryId);

        if (dbCategory) {
            const categoryName = request.body.category_name;
            if (await checkCategoryExisted(categoryName))
                return response.status(400).json({
                    message: "Category name already exists!",
                });

            const categoryImage = request.body.category_image;

            const updateCategory = {
                name: categoryName,
                image: categoryImage,
            };

            const validateResponse =
                validators.validateCategory(updateCategory);

            if (validateResponse !== true)
                return response.status(400).json({
                    message: "validated failed!",
                    error: validateResponse,
                });

            updateCategoryById(updateCategory, categoryId).then(() =>
                response.status(200).json({
                    message: "Update category successfull !",
                })
            );
        } else {
            return response.status(404).json({
                message: "Category type not found!",
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
        const categoryId = request.params.id;

        const dbCategory = await getCategoryById(categoryId);

        if (dbCategory) {
            await softDeleteCategoryById(categoryId);
            return response.status(200).json({
                message: "Delete category successfull",
            });
        } else
            return response.status(404).json({
                message: "Category not found!",
            });
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

module.exports = {
    index: index,
    showById: showById,
    create: create,
    updateById: updateById,
    softDeleteById: softDeleteById,
};

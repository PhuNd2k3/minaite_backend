const {
    showUserById,
} = require('../CRUD/user')

async function getUserById(request, response){
    try {
        const userId = request.params.userId
        const profile = await showUserById(userId)
        return response.status(200).json({
            message: 'Success get profile',
            profile: profile,
        })
    }
    catch(error){
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

module.exports = {
    getUserById: getUserById,
}
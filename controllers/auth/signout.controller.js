
async function signout(request, response) {
    return response.status(200).json({
        message: 'Signed out successfully'
    })
}

module.exports = signout
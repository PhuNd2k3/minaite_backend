const hashHelper = require(process.cwd() +'/helpers/password-encrypter')
const validators = require(process.cwd() + '/helpers/validators')
const jwt = require("jsonwebtoken")

const { getUserByEmail, addNewUser } = require('../CRUD/user')
const { addNewWallet } = require('../CRUD/wallet')

async function register(request, response) {
    try {
        if(!request.body.email || !request.body.password || !request.body.password2)
        {
            return response.status(409).json({
                message: 'Please enter email and password',
            })
        }
        
        if(request.body.password !== request.body.password2){
            return response.status(409).json({
                message: 'Password 1 and Password 2 is different',
            })
        }
        
        // Check if email already registered
        const dbUser = await getUserByEmail(request.body.email)
        if (dbUser) {
            return response.status(409).json({
                message: 'Email already exists!',
            })
        }
        
        
        // Create new user
        const newUser = {
            email: request.body.email,
            password: hashHelper.hash(request.body.password),
            avatar_url : "http://localhost:8000/images/avatars/default-avatar.png",
            isAdmin : false,
        }

        // Validate new user's data
        const validateResponse = validators.validateUser(newUser)
        if (validateResponse !== true) {
            return response.status(400).json({
                message: 'Validation failed!',
                errors: validateResponse,
            })
        }

        // Add new user to database
        addNewUser(newUser).then((result) => {

            // Create new wallet
            const newWallet = {
                user_id: result.id,
                shopee_pay_money: 0,
            }

            const token = jwt.sign(
                { id: result.id, email: request.body.email },
                process.env.JWT_SECRET_KEY,
                {
                  expiresIn: "1h",
                }
            );

            addNewWallet(newWallet)

            return response.status(200).json({
                token : token,
                message: 'Create user successfully!',
            })
        })
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

module.exports = register

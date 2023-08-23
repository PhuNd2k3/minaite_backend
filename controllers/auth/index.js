const register = require('./register.controller')
const login = require('./login.controller')
const signout = require('./signout.controller')

module.exports = {
    register: register,
    login : login,
    signout : signout,
}

const bcrypt = require('bcryptjs')

function hash(password) {
    var salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

function compare(password, hashed) {
    return bcrypt.compareSync(password, hashed)
}

module.exports = {
    hash: hash,
    compare: compare,
}

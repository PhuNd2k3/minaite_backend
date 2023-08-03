const userSchema = {
    name: { type: 'string', optional: true },
    gender: {type: 'string', optional: true},
    birthday : {type : 'date', optional : true},
    email: { type: 'email'},
    telephone:{type : 'string',max : 10, min : 10 ,optional: true },
    password: { type: 'string'},
    avatar_url: {type : 'string', optional : true},
    address : {type : 'string', optional : true},
    is_admin: { type: 'boolean', optional: true },
}

module.exports = {
    userSchema: userSchema,
}

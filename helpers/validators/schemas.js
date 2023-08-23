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

const walletSchema = {
    user_id : {type : 'number'},
    shopee_pay_money : {type : 'number', min : 0},
}

const categorySchema = {
    name : {type : 'string'},
    image : {type : 'string'}
}

const productSchema = {
    category_id : {type : 'number', optional : true},
    product_name : {type : 'string'},
    price : {type : 'number'},
    description : {type : 'string', optional : true},
    likes : {type : 'number', optional : true},
    star : {type : 'number',min : 0, max : 5, optional : true},
    quan_sold : {type : 'number', min : 0, optional : true},
    quan_in_stock : {type : 'number',  min : 0},
    origin : {type : 'string',optional : true},
    fromCity : {type : 'string', optional : true},
    isMall : {type : 'boolean', optional : true},
    discount : {type : 'number', max: 100, min:0, optional : true},
}

const feedbackSchema = {
    user_id: {type: 'number'},
    product_id: {type: 'number'},
    star: {type: 'number', max: 5, min: 1, optional: true},
    parent_id: {type: 'number', optional: true},
    content: {type: 'string', optional: true},
}

const cartSchema = {
    user_id: {type: 'number'},
    product_detail_id: {type: 'number'},
    quantity: {type: 'number', min: 1},
    total_price: {type: 'number'},
}

const productImage = {
    image : {type : 'string'}
}

const productDetail = {
    color : {type : 'string'},
    size : {type : 'string' , optional : true},
    quan_in_stock : {type : 'number', min : 0}
}

module.exports = {
    userSchema: userSchema,
    walletSchema : walletSchema,
    categorySchema : categorySchema,
    productSchema : productSchema,
    productDetail : productDetail,
    productImage : productImage,
    feedbackSchema: feedbackSchema,
    cartSchema: cartSchema,
}

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "ProductDetails",
            [
                {
                    product_id: 1,
                    size: "Size S",
                    color: "Màu Trắng",
                    quan_in_stock: 419,
                },
                {
                    product_id: 1,
                    size: "Size S",
                    color: "Màu Đen ",
                    quan_in_stock: 417,
                },
                {
                    product_id: 1,
                    size: "Size M",
                    color: "Màu Trắng",
                    quan_in_stock: 325,
                },
                {
                    product_id: 1,
                    size: "Size M",
                    color: "Màu Đen",
                    quan_in_stock: 356,
                },
                {
                    product_id: 1,
                    size: "Size L",
                    color: "Màu Trắng",
                    quan_in_stock: 240,
                },
                {
                    product_id: 1,
                    size: "Size L",
                    color: "Màu Đen",
                    quan_in_stock: 244,
                },
                {
                    product_id: 1,
                    size: "Size XL",
                    color: "Màu Trắng",
                    quan_in_stock: 235,
                },
                {
                    product_id: 1,
                    size: "Size XL",
                    color: "Màu Đen",
                    quan_in_stock: 237,
                },
                {
                    product_id: 1,
                    size: "Size XXL",
                    color: "Màu Trắng",
                    quan_in_stock: 318,
                },
                {
                    product_id: 1,
                    size: "Size XXL",
                    color: "Màu Đen",
                    quan_in_stock: 261,
                },
                {
                    product_id: 2,
                    size: "Size L",
                    color: "Màu Trắng",
                    quan_in_stock: 82259,
                },
                {
                    product_id: 2,
                    size: "Size L",
                    color: "Màu Đen",
                    quan_in_stock: 82258,
                },
                {
                    product_id: 2,
                    size: "Size XL",
                    color: "Màu Trắng",
                    quan_in_stock: 82259,
                },
                {
                    product_id: 2,
                    size: "Size XL",
                    color: "Màu Đen",
                    quan_in_stock: 82259,
                },
                {
                    product_id: 2,
                    size: "Size XXL",
                    color: "Màu Trắng",
                    quan_in_stock: 82259,
                },
                {
                    product_id: 2,
                    size: "Size XXL",
                    color: "Màu Đen",
                    quan_in_stock: 82259,
                },
                {
                    product_id: 3,
                    size: "Size M",
                    color: "Màu Trắng",
                    quan_in_stock: 548,
                },
                {
                    product_id: 3,
                    size: "Size M",
                    color: "Màu Đen",
                    quan_in_stock: 547,
                },
                {
                    product_id: 3,
                    size: "Size L",
                    color: "Màu Trắng",
                    quan_in_stock: 547,
                },
                {
                    product_id: 3,
                    size: "Size L",
                    color: "Màu Đen",
                    quan_in_stock: 547,
                },
                {
                    product_id: 3,
                    size: "Size XL",
                    color: "Màu Trắng",
                    quan_in_stock: 547,
                },
                {
                    product_id: 3,
                    size: "Size XL",
                    color: "Màu Đen",
                    quan_in_stock: 547,
                },
                {
                    product_id: 4,
                    size: "Size S",
                    color: "Màu Trắng",
                    quan_in_stock: 419,
                },
                {
                    product_id: 4,
                    size: "Size S",
                    color: "Màu Đen ",
                    quan_in_stock: 417,
                },
                {
                    product_id: 4,
                    size: "Size M",
                    color: "Màu Trắng",
                    quan_in_stock: 325,
                },
                {
                    product_id: 4,
                    size: "Size M",
                    color: "Màu Đen",
                    quan_in_stock: 356,
                },
                {
                    product_id: 4,
                    size: "Size L",
                    color: "Màu Trắng",
                    quan_in_stock: 240,
                },
                {
                    product_id: 4,
                    size: "Size L",
                    color: "Màu Đen",
                    quan_in_stock: 244,
                },
                {
                    product_id: 4,
                    size: "Size XL",
                    color: "Màu Trắng",
                    quan_in_stock: 235,
                },
                {
                    product_id: 4,
                    size: "Size XL",
                    color: "Màu Đen",
                    quan_in_stock: 237,
                },
                {
                    product_id: 4,
                    size: "Size XXL",
                    color: "Màu Trắng",
                    quan_in_stock: 318,
                },
                {
                    product_id: 4,
                    size: "Size XXL",
                    color: "Màu Đen",
                    quan_in_stock: 261,
                },
                {
                    product_id: 5,
                    size: "Size L",
                    color: "Màu Trắng",
                    quan_in_stock: 82259,
                },
                {
                    product_id: 5,
                    size: "Size L",
                    color: "Màu Đen",
                    quan_in_stock: 82258,
                },
                {
                    product_id: 5,
                    size: "Size XL",
                    color: "Màu Trắng",
                    quan_in_stock: 82259,
                },
                {
                    product_id: 5,
                    size: "Size XL",
                    color: "Màu Đen",
                    quan_in_stock: 82259,
                },
                {
                    product_id: 5,
                    size: "Size XXL",
                    color: "Màu Trắng",
                    quan_in_stock: 82259,
                },
                {
                    product_id: 5,
                    size: "Size XXL",
                    color: "Màu Đen",
                    quan_in_stock: 82259,
                },
                {
                    product_id: 6,
                    size: "Size M",
                    color: "Màu Trắng",
                    quan_in_stock: 548,
                },
                {
                    product_id: 6,
                    size: "Size M",
                    color: "Màu Đen",
                    quan_in_stock: 547,
                },
                {
                    product_id: 6,
                    size: "Size L",
                    color: "Màu Trắng",
                    quan_in_stock: 547,
                },
                {
                    product_id: 6,
                    size: "Size L",
                    color: "Màu Đen",
                    quan_in_stock: 547,
                },
                {
                    product_id: 6,
                    size: "Size XL",
                    color: "Màu Trắng",
                    quan_in_stock: 547,
                },
                {
                    product_id: 6,
                    size: "Size XL",
                    color: "Màu Đen",
                    quan_in_stock: 547,
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("ProductDetails", null, {});
    },
};

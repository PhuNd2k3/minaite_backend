"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("Bills", [
            {
                recipient_info: "Nguyễn Văn Dũng",
                user_id: 2,
                payment_method: "Thanh toán khi nhận hàng",
                transport_method: "Vận chuyển nhanh",
                book_status: "Chưa thanh toán",
                ship_status: "Đang xuất kho",
                ship_money: 32000,
                ship_discount: 0,
                product_money: 120000,
                product_discount: 0,
                total_price: 152000,
            },
            {
                recipient_info: "Nguyễn Văn A",
                user_id: 2,
                payment_method: "Thanh toán khi nhận hàng",
                transport_method: "Vận chuyển nhanh",
                book_status: "Chưa thanh toán",
                ship_status: "Đang xuất kho",
                ship_money: 32000,
                ship_discount: 0,
                product_money: 120000,
                product_discount: 0,
                total_price: 152000,
            },
            {
                recipient_info: "Nguyễn Văn B",
                user_id: 2,
                payment_method: "Thanh toán khi nhận hàng",
                transport_method: "Vận chuyển nhanh",
                book_status: "Chưa thanh toán",
                ship_status: "Đang xuất kho",
                ship_money: 32000,
                ship_discount: 0,
                product_money: 120000,
                product_discount: 0,
                total_price: 152000,
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Bills", null, {});
    },
};

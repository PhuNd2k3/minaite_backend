"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("BillDetails", [
            {
                product_detail_id: 1,
                bill_id: 1,
                quantity: 2,
                total_price: 80000,
            },
            {
                product_detail_id: 2,
                bill_id: 1,
                quantity: 1,
                total_price: 40000,
            },
            {
                product_detail_id: 3,
                bill_id: 2,
                quantity: 2,
                total_price: 80000,
            },
            {
                product_detail_id: 4,
                bill_id: 2,
                quantity: 1,
                total_price: 40000,
            },
            {
                product_detail_id: 6,
                bill_id: 3,
                quantity: 1,
                total_price: 40000,
            },
            {
                product_detail_id: 7,
                bill_id: 3,
                quantity: 1,
                total_price: 40000,
            },
            {
                product_detail_id: 8,
                bill_id: 3,
                quantity: 1,
                total_price: 40000,
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("BillDetails", null, {});
    },
};

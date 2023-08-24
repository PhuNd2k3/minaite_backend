"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Carts",
            [
                {
                    user_id: 1,
                    product_detail_id: 1,
                    quantity: 3,
                    total_price: 120000,
                },
                {
                    user_id: 1,
                    product_detail_id: 2,
                    quantity: 3,
                    total_price: 120000,
                },
                {
                    user_id: 1,
                    product_detail_id: 3,
                    quantity: 3,
                    total_price: 120000,
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Carts", null, {});
    },
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "ProductImages",
            [
                {
                    product_id: 1,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product1_1.png",
                },
                {
                    product_id: 1,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product1_2.png",
                },
                {
                    product_id: 1,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product1_3.png",
                },
                {
                    product_id: 1,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product1_4.png",
                },
                {
                    product_id: 1,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product1_5.png",
                },
                {
                    product_id: 1,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product1_6.png",
                },
                {
                    product_id: 1,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product1_7.png",
                },
                {
                    product_id: 2,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product2_1.png",
                },
                {
                    product_id: 2,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product2_2.png",
                },
                {
                    product_id: 2,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product2_3.png",
                },
                {
                    product_id: 2,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product2_4.png",
                },
                {
                    product_id: 2,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product2_5.png",
                },
                {
                    product_id: 2,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product2_6.png",
                },
                {
                    product_id: 3,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product3_1.png",
                },
                {
                    product_id: 3,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product3_2.png",
                },
                {
                    product_id: 3,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product3_3.png",
                },
                {
                    product_id: 3,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product3_4.png",
                },
                {
                    product_id: 3,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product3_5.png",
                },
                {
                    product_id: 3,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product3_6.png",
                },
                {
                    product_id: 3,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product3_7.png",
                },
                {
                    product_id: 4,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product1_1.png",
                },
                {
                    product_id: 4,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product1_2.png",
                },
                {
                    product_id: 4,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product1_3.png",
                },
                {
                    product_id: 4,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product1_4.png",
                },
                {
                    product_id: 4,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product1_5.png",
                },
                {
                    product_id: 4,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product1_6.png",
                },
                {
                    product_id: 4,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product1_7.png",
                },
                {
                    product_id: 5,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product2_1.png",
                },
                {
                    product_id: 5,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product2_2.png",
                },
                {
                    product_id: 5,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product2_3.png",
                },
                {
                    product_id: 5,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product2_4.png",
                },
                {
                    product_id: 5,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product2_5.png",
                },
                {
                    product_id: 5,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product2_6.png",
                },
                {
                    product_id: 6,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product3_1.png",
                },
                {
                    product_id: 6,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product3_2.png",
                },
                {
                    product_id: 6,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product3_3.png",
                },
                {
                    product_id: 6,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product3_4.png",
                },
                {
                    product_id: 6,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product3_5.png",
                },
                {
                    product_id: 6,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product3_6.png",
                },
                {
                    product_id: 6,
                    image:
                        process.cwd() +
                        "http://localhost:8000/images/product_images/product3_7.png",
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("ProductImages", null, {});
    },
};

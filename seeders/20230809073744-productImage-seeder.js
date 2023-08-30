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
                        "http://localhost:8000/images/product_images/product1_1.png",
                },
                {
                    product_id: 1,
                    image:
                        "http://localhost:8000/images/product_images/product1_2.png",
                },
                {
                    product_id: 1,
                    image:
                        "http://localhost:8000/images/product_images/product1_3.png",
                },
                {
                    product_id: 1,
                    image:
                        "http://localhost:8000/images/product_images/product1_4.png",
                },
                {
                    product_id: 1,
                    image:
                        "http://localhost:8000/images/product_images/product1_5.png",
                },
                {
                    product_id: 1,
                    image:
                        "http://localhost:8000/images/product_images/product1_6.png",
                },
                {
                    product_id: 1,
                    image:
                        "http://localhost:8000/images/product_images/product1_7.png",
                },
                {
                    product_id: 2,
                    image:
                        "http://localhost:8000/images/product_images/product2_1.png",
                },
                {
                    product_id: 2,
                    image:
                        "http://localhost:8000/images/product_images/product2_2.png",
                },
                {
                    product_id: 2,
                    image:
                        "http://localhost:8000/images/product_images/product2_3.png",
                },
                {
                    product_id: 2,
                    image:
                        "http://localhost:8000/images/product_images/product2_4.png",
                },
                {
                    product_id: 2,
                    image:
                        "http://localhost:8000/images/product_images/product2_5.png",
                },
                {
                    product_id: 2,
                    image:
                        "http://localhost:8000/images/product_images/product2_6.png",
                },
                {
                    product_id: 3,
                    image:
                        "http://localhost:8000/images/product_images/product3_1.png",
                },
                {
                    product_id: 3,
                    image:
                        "http://localhost:8000/images/product_images/product3_2.png",
                },
                {
                    product_id: 3,
                    image:
                        "http://localhost:8000/images/product_images/product3_3.png",
                },
                {
                    product_id: 3,
                    image:
                        "http://localhost:8000/images/product_images/product3_4.png",
                },
                {
                    product_id: 3,
                    image:
                        "http://localhost:8000/images/product_images/product3_5.png",
                },
                {
                    product_id: 3,
                    image:
                        "http://localhost:8000/images/product_images/product3_6.png",
                },
                {
                    product_id: 3,
                    image:
                        "http://localhost:8000/images/product_images/product3_7.png",
                },
                {
                    product_id: 4,
                    image:
                        "http://localhost:8000/images/product_images/product1_1.png",
                },
                {
                    product_id: 4,
                    image:
                        "http://localhost:8000/images/product_images/product1_2.png",
                },
                {
                    product_id: 4,
                    image:
                        "http://localhost:8000/images/product_images/product1_3.png",
                },
                {
                    product_id: 4,
                    image:
                        "http://localhost:8000/images/product_images/product1_4.png",
                },
                {
                    product_id: 4,
                    image:
                        "http://localhost:8000/images/product_images/product1_5.png",
                },
                {
                    product_id: 4,
                    image:
                        "http://localhost:8000/images/product_images/product1_6.png",
                },
                {
                    product_id: 4,
                    image:
                        "http://localhost:8000/images/product_images/product1_7.png",
                },
                {
                    product_id: 5,
                    image:
                        "http://localhost:8000/images/product_images/product2_1.png",
                },
                {
                    product_id: 5,
                    image:
                        "http://localhost:8000/images/product_images/product2_2.png",
                },
                {
                    product_id: 5,
                    image:
                        "http://localhost:8000/images/product_images/product2_3.png",
                },
                {
                    product_id: 5,
                    image:
                        "http://localhost:8000/images/product_images/product2_4.png",
                },
                {
                    product_id: 5,
                    image:
                        "http://localhost:8000/images/product_images/product2_5.png",
                },
                {
                    product_id: 5,
                    image:
                        "http://localhost:8000/images/product_images/product2_6.png",
                },
                {
                    product_id: 6,
                    image:
                        "http://localhost:8000/images/product_images/product3_1.png",
                },
                {
                    product_id: 6,
                    image:
                        "http://localhost:8000/images/product_images/product3_2.png",
                },
                {
                    product_id: 6,
                    image:
                        "http://localhost:8000/images/product_images/product3_3.png",
                },
                {
                    product_id: 6,
                    image:
                        "http://localhost:8000/images/product_images/product3_4.png",
                },
                {
                    product_id: 6,
                    image:
                        "http://localhost:8000/images/product_images/product3_5.png",
                },
                {
                    product_id: 6,
                    image:
                        "http://localhost:8000/images/product_images/product3_6.png",
                },
                {
                    product_id: 6,
                    image:
                        "http://localhost:8000/images/product_images/product3_7.png",
                },
                {
                    product_id: 7,
                    image:
                        "http://localhost:8000/images/product_images/product3_1.png",
                },
                {
                    product_id: 7,
                    image:
                        "http://localhost:8000/images/product_images/product3_2.png",
                },
                {
                    product_id: 7,
                    image:
                        "http://localhost:8000/images/product_images/product3_3.png",
                },
                {
                    product_id: 7,
                    image:
                        "http://localhost:8000/images/product_images/product3_4.png",
                },
                {
                    product_id: 7,
                    image:
                        "http://localhost:8000/images/product_images/product3_5.png",
                },
                {
                    product_id: 7,
                    image:
                        "http://localhost:8000/images/product_images/product3_6.png",
                },
                {
                    product_id: 7,
                    image:
                        "http://localhost:8000/images/product_images/product3_7.png",
                },
                {
                    product_id: 8,
                    image:
                        "http://localhost:8000/images/product_images/product1_1.png",
                },
                {
                    product_id: 8,
                    image:
                        "http://localhost:8000/images/product_images/product1_2.png",
                },
                {
                    product_id: 8,
                    image:
                        "http://localhost:8000/images/product_images/product1_3.png",
                },
                {
                    product_id: 8,
                    image:
                        "http://localhost:8000/images/product_images/product1_4.png",
                },
                {
                    product_id: 8,
                    image:
                        "http://localhost:8000/images/product_images/product1_5.png",
                },
                {
                    product_id: 8,
                    image:
                        "http://localhost:8000/images/product_images/product1_6.png",
                },
                {
                    product_id: 8,
                    image:
                        "http://localhost:8000/images/product_images/product1_7.png",
                },
                {
                    product_id: 9,
                    image:
                        "http://localhost:8000/images/product_images/product2_1.png",
                },
                {
                    product_id: 9,
                    image:
                        "http://localhost:8000/images/product_images/product2_2.png",
                },
                {
                    product_id: 9,
                    image:
                        "http://localhost:8000/images/product_images/product2_3.png",
                },
                {
                    product_id: 9,
                    image:
                        "http://localhost:8000/images/product_images/product2_4.png",
                },
                {
                    product_id: 9,
                    image:
                        "http://localhost:8000/images/product_images/product2_5.png",
                },
                {
                    product_id: 9,
                    image:
                        "http://localhost:8000/images/product_images/product2_6.png",
                },
                
                {
                    product_id: 10,
                    image:
                        "https://down-vn.img.susercontent.com/file/e8e87c5b16a85b5af9ecb25bb4c8f52f",
                },
                {
                    product_id: 10,
                    image:
                        "https://down-vn.img.susercontent.com/file/029d4760d83e3981e3d6ada9d9415515",
                },
                {
                    product_id: 10,
                    image:
                        "https://down-vn.img.susercontent.com/file/cc111e7df2c3b3e130d3ff290bf5ac24",
                },
                {
                    product_id: 10,
                    image:
                        "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgagh6d1yb1m6c",
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("ProductImages", null, {});
    },
};

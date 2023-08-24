"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Categories",
            [
                {
                    name: "Thời trang nam",
                    image: "http://localhost:8000/images/categories/T_Shirt.png",
                },
                {
                    name: "Điện thoại & phụ kiện",
                    image: "http://localhost:8000/images/categories/phone.png",
                },
                {
                    name: "Thiết bị điện tử",
                    image: "http://localhost:8000/images/categories/electronic_device.png",
                },
                {
                    name: "Máy tính & laptop",
                    image: "http://localhost:8000/images/categories/laptop.png",
                },
                {
                    name: "Máy ảnh và máy quay phim",
                    image: "http://localhost:8000/images/categories/camera.png",
                },
                {
                    name: "Đồng hồ",
                    image: "http://localhost:8000/images/categories/watcher.png",
                },
                {
                    name: "Giày dép nam",
                    image: "http://localhost:8000/images/categories/shoes.png",
                },
                {
                    name: "Thiết bị điện gia dụng",
                    image: "http://localhost:8000/images/categories/household_electrical.png",
                },
                {
                    name: "Thể thao & du lịch",
                    image: "http://localhost:8000/images/categories/sport.png",
                },
                {
                    name: "Ô tô & xe máy & xe đạp",
                    image: "http://localhost:8000/images/categories/motorbike.png",
                },
                {
                    name: "Thời trang nữ",
                    image: "http://localhost:8000/images/categories/female_fashion.png",
                },
                {
                    name: "Mẹ & Bé",
                    image: "http://localhost:8000/images/categories/baby.png",
                },
                {
                    name: "Nhà cửa và đời sống",
                    image: "http://localhost:8000/images/categories/cooking_tool.png",
                },
                {
                    name: "Sắc đẹp",
                    image: "http://localhost:8000/images/categories/makeup.png",
                },
                {
                    name: "Sức khỏe",
                    image: "http://localhost:8000/images/categories/healthy.png",
                },
                {
                    name: "Giày dép nữ",
                    image: "http://localhost:8000/images/categories/female_shoes.png",
                },
                {
                    name: "Túi ví nữ",
                    image: "http://localhost:8000/images/categories/bags.png",
                },
                {
                    name: "Phụ kiện và trang sức nữ",
                    image: "http://localhost:8000/images/categories/jewelry.png",
                },
                {
                    name: "Bách hóa online",
                    image: "http://localhost:8000/images/categories/food.png",
                },
                {
                    name: "Nhà sách online",
                    image: "http://localhost:8000/images/categories/book.png",
                },
                {
                    name: "Thời trang trẻ em",
                    image: "http://localhost:8000/images/categories/baby_clothes.png",
                },
                {
                    name: "Balo & túi ví nam",
                    image: "http://localhost:8000/images/categories/male_bag.png",
                },
                {
                    name: "Đồ chơi",
                    image: "http://localhost:8000/images/categories/toy.png",
                },
                {
                    name: "Giặt giũ & chăm sóc nhà cửa",
                    image: "http://localhost:8000/images/categories/laundry.png",
                },
                {
                    name: "Chăm sóc thú cưng",
                    image: "http://localhost:8000/images/categories/pet.png",
                },
                {
                    name: "Vouchers & dịch vụ",
                    image: "http://localhost:8000/images/categories/voucher.png",
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Categories", null, {});
    },
};

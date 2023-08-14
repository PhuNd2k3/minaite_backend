"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Thời trang nam",
          image: process.cwd() + "/public/images/categories/T_Shirt.png",
        },
        {
          name: "Điện thoại & phụ kiện",
          image: process.cwd() + "/public/images/categories/phone.png",
        },
        {
          name: "Thiết bị điện tử",
          image:
            process.cwd() + "/public/images/categories/electronic_device.png",
        },
        {
          name: "Máy tính & laptop",
          image: process.cwd() + "/public/images/categories/laptop.png",
        },
        {
          name: "Máy ảnh và máy quay phim",
          image: process.cwd() + "/public/images/categories/camera.png",
        },
        {
          name: "Đồng hồ",
          image: process.cwd() + "/public/images/categories/watcher.png",
        },
        {
          name: "Giày dép nam",
          image: process.cwd() + "/public/images/categories/shoes.png",
        },
        {
          name: "Thiết bị điện gia dụng",
          image:
            process.cwd() +
            "/public/images/categories/household_electrical.png",
        },
        {
          name: "Thể thao & du lịch",
          image: process.cwd() + "/public/images/categories/sport.png",
        },
        {
          name: "Ô tô & xe máy & xe đạp",
          image: process.cwd() + "/public/images/categories/motorbike.png",
        },
        {
          name: "Thời trang nữ",
          image: process.cwd() + "/public/images/categories/female_fashion.png",
        },
        {
          name: "Mẹ & Bé",
          image: process.cwd() + "/public/images/categories/baby.png",
        },
        {
          name: "Nhà cửa và đời sống",
          image: process.cwd() + "/public/images/categories/cooking_tool.png",
        },
        {
          name: "Sắc đẹp",
          image: process.cwd() + "/public/images/categories/makeup.png",
        },
        {
          name: "Sức khỏe",
          image: process.cwd() + "/public/images/categories/healthy.png",
        },
        {
          name: "Giày dép nữ",
          image: process.cwd() + "/public/images/categories/female_shoes.png",
        },
        {
          name: "Túi ví nữ",
          image: process.cwd() + "/public/images/categories/bags.png",
        },
        {
          name: "Phụ kiện và trang sức nữ",
          image: process.cwd() + "/public/images/categories/jewelry.png",
        },
        {
          name: "Bách hóa online",
          image: process.cwd() + "/public/images/categories/food.png",
        },
        {
          name: "Nhà sách online",
          image: process.cwd() + "/public/images/categories/book.png",
        },
        {
          name: "Thời trang trẻ em",
          image: process.cwd() + "/public/images/categories/baby_clothes.png",
        },
        {
          name: "Balo & túi ví nam",
          image: process.cwd() + "/public/images/categories/male_bag.png",
        },
        {
          name: "Đồ chơi",
          image: process.cwd() + "/public/images/categories/toy.png",
        },
        {
          name: "Giặt giũ & chăm sóc nhà cửa",
          image: process.cwd() + "/public/images/categories/laundry.png",
        },
        {
          name: "Chăm sóc thú cưng",
          image: process.cwd() + "/public/images/categories/pet.png",
        },
        {
          name: "Vouchers & dịch vụ",
          image: process.cwd() + "/public/images/categories/voucher.png",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};

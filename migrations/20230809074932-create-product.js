"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Products", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            category_id: {
                allowNull : false,
                type: Sequelize.INTEGER,
            },
            product_name: {
                allowNull : false,
                type: Sequelize.STRING,
            },
            price: {
                allowNull : false,
                type: Sequelize.INTEGER,
            },
            description: {
                type: Sequelize.STRING(7000),
            },
            likes: {
                type: Sequelize.INTEGER,
                defaultValue : 0,
            },
            star: {
                type: Sequelize.FLOAT,
                defaultValue : 0,
            },
            quan_sold: {
                type: Sequelize.INTEGER,
                defaultValue : 0,
            },
            quan_in_stock: {
                type: Sequelize.INTEGER,
            },
            origin: {
                type: Sequelize.STRING,
            },
            fromCity: {
                type: Sequelize.STRING,
            },
            isMall: {
                type: Sequelize.BOOLEAN,
                defaultValue : false,
            },
            discount: {
                type: Sequelize.INTEGER,
                defaultValue : 0,
            },
            deletedAt: {
                type: Sequelize.DATE,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn("NOW"),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn("NOW"),
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Products");
    },
};

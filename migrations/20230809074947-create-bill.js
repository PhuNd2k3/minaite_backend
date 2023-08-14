"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Bills", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            recipient_info: {
                type: Sequelize.STRING,
            },
            user_id: {
                allowNull : false,
                type: Sequelize.INTEGER,
            },
            payment_method: {
                type: Sequelize.STRING,
            },
            transport_method: {
                type: Sequelize.STRING,
            },
            book_status: {
                type: Sequelize.STRING,
            },
            ship_status: {
                type: Sequelize.STRING,
            },
            ship_money: {
                type: Sequelize.INTEGER,
            },
            ship_discount: {
                type: Sequelize.INTEGER,
            },
            product_money: {
                type: Sequelize.INTEGER,
            },
            product_discount: {
                type: Sequelize.INTEGER,
            },
            total_price: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable("Bills");
    },
};

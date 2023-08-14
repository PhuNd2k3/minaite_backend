"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Vouchers", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            types: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            discount: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            start_date: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            end_date: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            voucher_quantity: {
                type: Sequelize.INTEGER,
            },
            category_id: {
                type: Sequelize.INTEGER,
            },
            isAccessToAll: {
                type: Sequelize.BOOLEAN,
                defaultValue : true,
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
        await queryInterface.dropTable("Vouchers");
    },
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("FeedBacks", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            user_id: {
                allowNull : false,
                type: Sequelize.INTEGER,
            },
            product_id: {
                allowNull : false,
                type: Sequelize.INTEGER,
            },
            star: {
                type: Sequelize.FLOAT,
            },
            parent_id: {
                type: Sequelize.INTEGER,
            },
            content: {
                allowNull : false,
                type: Sequelize.STRING,
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
        await queryInterface.dropTable("FeedBacks");
    },
};

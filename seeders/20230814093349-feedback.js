'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
        "FeedBacks",
        [
            {
              user_id: 2,
              product_id: 2,
              star: 5,
              parent_id: null,
              content: "Siuuuuu",
            },
            {
              user_id: 1,
              product_id: 1,
              star: 5,
              parent_id: null,
              content: 'Great product!',
            },
            {
              user_id: 2,
              product_id: 3,
              star: 4,
              parent_id: null,
              content: 'Good quality.',
            },
            {
              user_id: 3,
              product_id: 2,
              star: 3,
              parent_id: null,
              content: 'Could be better.',
            },
            {
              user_id: 4,
              product_id: 4,
              star: 5,
              parent_id: null,
              content: 'Excellent service!',
            },
            {
              user_id: 5,
              product_id: 5,
              star: 2,
              parent_id: null,
              content: 'Not as expected.',
            },
            {
              user_id: 6,
              product_id: 6,
              star: 4,
              parent_id: null,
              content: 'Impressed with the packaging.',
            },
            {
              user_id: 7,
              product_id: 7,
              star: 3,
              parent_id: null,
              content: 'Average experience.',
            },
            {
              user_id: 8,
              product_id: 8,
              star: 5,
              parent_id: null,
              content: 'Highly recommended!',
            },
            {
              user_id: 9,
              product_id: 9,
              star: 4,
              parent_id: null,
              content: 'Very satisfied.',
            },
            {
              user_id: 10,
              product_id: 1,
              star: 3,
              parent_id: null,
              content: 'Decent product.',
            },
            {
              user_id: 5,
              product_id: 2,
              star: 2,
              parent_id: null,
              content: 'Disappointing.',
            },
            {
              user_id: 1,
              product_id: 3,
              star: null,
              parent_id: 3, 
              content: 'We appreciate your feedback. We are working on improvements.',
            },
            {
              user_id: 1,
              product_id: 5,
              star: null,
              parent_id: 6, 
              content: 'Thank you for your kind words!',
            },
            {
              user_id: 1,
              product_id: 8,
              star: null,
              parent_id: 9, 
              content: 'We\'re glad you\'re satisfied with your purchase.',
            },
        ],
        {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("FeedBacks", null, {});
  }
};

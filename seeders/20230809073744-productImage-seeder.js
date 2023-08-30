"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "ProductImages",
            [
                // Clothes
                {
                    product_id: 1,
                    image: "http://localhost:8000/images/product_images/product1_1.png",
                },
                {
                    product_id: 1,
                    image: "http://localhost:8000/images/product_images/product1_2.png",
                },
                {
                    product_id: 1,
                    image: "http://localhost:8000/images/product_images/product1_3.png",
                },
                {
                    product_id: 1,
                    image: "http://localhost:8000/images/product_images/product1_4.png",
                },
                {
                    product_id: 1,
                    image: "http://localhost:8000/images/product_images/product1_5.png",
                },
                {
                    product_id: 1,
                    image: "http://localhost:8000/images/product_images/product1_6.png",
                },
                {
                    product_id: 1,
                    image: "http://localhost:8000/images/product_images/product1_7.png",
                },
                {
                    product_id: 2,
                    image: "http://localhost:8000/images/product_images/product2_1.png",
                },
                {
                    product_id: 2,
                    image: "http://localhost:8000/images/product_images/product2_2.png",
                },
                {
                    product_id: 2,
                    image: "http://localhost:8000/images/product_images/product2_3.png",
                },
                {
                    product_id: 2,
                    image: "http://localhost:8000/images/product_images/product2_4.png",
                },
                {
                    product_id: 2,
                    image: "http://localhost:8000/images/product_images/product2_5.png",
                },
                {
                    product_id: 2,
                    image: "http://localhost:8000/images/product_images/product2_6.png",
                },
                {
                    product_id: 3,
                    image: "http://localhost:8000/images/product_images/product3_1.png",
                },
                {
                    product_id: 3,
                    image: "http://localhost:8000/images/product_images/product3_2.png",
                },
                {
                    product_id: 3,
                    image: "http://localhost:8000/images/product_images/product3_3.png",
                },
                {
                    product_id: 3,
                    image: "http://localhost:8000/images/product_images/product3_4.png",
                },
                {
                    product_id: 3,
                    image: "http://localhost:8000/images/product_images/product3_5.png",
                },
                {
                    product_id: 3,
                    image: "http://localhost:8000/images/product_images/product3_6.png",
                },
                {
                    product_id: 3,
                    image: "http://localhost:8000/images/product_images/product3_7.png",
                },
                {
                    product_id: 4,
                    image: "http://localhost:8000/images/product_images/product1_1.png",
                },
                {
                    product_id: 4,
                    image: "http://localhost:8000/images/product_images/product1_2.png",
                },
                {
                    product_id: 4,
                    image: "http://localhost:8000/images/product_images/product1_3.png",
                },
                {
                    product_id: 4,
                    image: "http://localhost:8000/images/product_images/product1_4.png",
                },
                {
                    product_id: 4,
                    image: "http://localhost:8000/images/product_images/product1_5.png",
                },
                {
                    product_id: 4,
                    image: "http://localhost:8000/images/product_images/product1_6.png",
                },
                {
                    product_id: 4,
                    image: "http://localhost:8000/images/product_images/product1_7.png",
                },
                {
                    product_id: 5,
                    image: "http://localhost:8000/images/product_images/product2_1.png",
                },
                {
                    product_id: 5,
                    image: "http://localhost:8000/images/product_images/product2_2.png",
                },
                {
                    product_id: 5,
                    image: "http://localhost:8000/images/product_images/product2_3.png",
                },
                {
                    product_id: 5,
                    image: "http://localhost:8000/images/product_images/product2_4.png",
                },
                {
                    product_id: 5,
                    image: "http://localhost:8000/images/product_images/product2_5.png",
                },
                {
                    product_id: 5,
                    image: "http://localhost:8000/images/product_images/product2_6.png",
                },
                {
                    product_id: 6,
                    image: "http://localhost:8000/images/product_images/product3_1.png",
                },
                {
                    product_id: 6,
                    image: "http://localhost:8000/images/product_images/product3_2.png",
                },
                {
                    product_id: 6,
                    image: "http://localhost:8000/images/product_images/product3_3.png",
                },
                {
                    product_id: 6,
                    image: "http://localhost:8000/images/product_images/product3_4.png",
                },
                {
                    product_id: 6,
                    image: "http://localhost:8000/images/product_images/product3_5.png",
                },
                {
                    product_id: 6,
                    image: "http://localhost:8000/images/product_images/product3_6.png",
                },
                {
                    product_id: 6,
                    image: "http://localhost:8000/images/product_images/product3_7.png",
                },
                {
                    product_id: 7,
                    image: "http://localhost:8000/images/product_images/product3_1.png",
                },
                {
                    product_id: 7,
                    image: "http://localhost:8000/images/product_images/product3_2.png",
                },
                {
                    product_id: 7,
                    image: "http://localhost:8000/images/product_images/product3_3.png",
                },
                {
                    product_id: 7,
                    image: "http://localhost:8000/images/product_images/product3_4.png",
                },
                {
                    product_id: 7,
                    image: "http://localhost:8000/images/product_images/product3_5.png",
                },
                {
                    product_id: 7,
                    image: "http://localhost:8000/images/product_images/product3_6.png",
                },
                {
                    product_id: 7,
                    image: "http://localhost:8000/images/product_images/product3_7.png",
                },
                {
                    product_id: 8,
                    image: "http://localhost:8000/images/product_images/product1_1.png",
                },
                {
                    product_id: 8,
                    image: "http://localhost:8000/images/product_images/product1_2.png",
                },
                {
                    product_id: 8,
                    image: "http://localhost:8000/images/product_images/product1_3.png",
                },
                {
                    product_id: 8,
                    image: "http://localhost:8000/images/product_images/product1_4.png",
                },
                {
                    product_id: 8,
                    image: "http://localhost:8000/images/product_images/product1_5.png",
                },
                {
                    product_id: 8,
                    image: "http://localhost:8000/images/product_images/product1_6.png",
                },
                {
                    product_id: 8,
                    image: "http://localhost:8000/images/product_images/product1_7.png",
                },
                {
                    product_id: 9,
                    image: "http://localhost:8000/images/product_images/product2_1.png",
                },
                {
                    product_id: 9,
                    image: "http://localhost:8000/images/product_images/product2_2.png",
                },
                {
                    product_id: 9,
                    image: "http://localhost:8000/images/product_images/product2_3.png",
                },
                {
                    product_id: 9,
                    image: "http://localhost:8000/images/product_images/product2_4.png",
                },
                {
                    product_id: 9,
                    image: "http://localhost:8000/images/product_images/product2_5.png",
                },
                {
                    product_id: 9,
                    image: "http://localhost:8000/images/product_images/product2_6.png",
                },

                {
                    product_id: 10,
                    image: "https://down-vn.img.susercontent.com/file/e8e87c5b16a85b5af9ecb25bb4c8f52f",
                },
                {
                    product_id: 10,
                    image: "https://down-vn.img.susercontent.com/file/029d4760d83e3981e3d6ada9d9415515",
                },
                {
                    product_id: 10,
                    image: "https://down-vn.img.susercontent.com/file/cc111e7df2c3b3e130d3ff290bf5ac24",
                },
                {
                    product_id: 10,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgagh6d1yb1m6c",
                },

                // Phone
                {
                    product_id: 11,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljar8kgrltjm0c",
                },
                {
                    product_id: 11,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljar8kgrq18y72",
                },
                {
                    product_id: 11,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljar8kgrn842f2",
                },
                {
                    product_id: 11,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljar8kgromoiae",
                },
                {
                    product_id: 11,
                    image: "https://down-vn.img.susercontent.com/file/7f26d9703696afb7630c74c75940e76b",
                },
                {
                    product_id: 12,
                    image: "https://down-vn.img.susercontent.com/file/sg-11134201-22110-4zg3ngtly6jvc6",
                },
                {
                    product_id: 12,
                    image: "https://down-vn.img.susercontent.com/file/sg-11134201-22110-qsll6stly6jv90",
                },
                {
                    product_id: 12,
                    image: "https://down-vn.img.susercontent.com/file/sg-11134201-22110-7g8712tly6jv45",
                },
                {
                    product_id: 12,
                    image: "https://down-vn.img.susercontent.com/file/sg-11134201-22110-1wrt5culy6jv1e",
                },
                {
                    product_id: 12,
                    image: "https://down-vn.img.susercontent.com/file/sg-11134201-22110-3zo9lpuly6jva9",
                },
                {
                    product_id: 13,
                    image: "https://down-vn.img.susercontent.com/file/sg-11134201-22110-c4h9562nwckvba",
                },
                {
                    product_id: 13,
                    image: "https://down-vn.img.susercontent.com/file/sg-11134201-22110-3vpqx63nwckvb9",
                },
                {
                    product_id: 13,
                    image: "https://down-vn.img.susercontent.com/file/sg-11134201-22110-9bq2yn4nwckvc1",
                },
                {
                    product_id: 13,
                    image: "https://down-vn.img.susercontent.com/file/sg-11134201-22110-mjtofk5nwckva5",
                },
                {
                    product_id: 13,
                    image: "https://down-vn.img.susercontent.com/file/sg-11134201-22110-0uf0hk6nwckvaa",
                },
                {
                    product_id: 14,
                    image: "https://down-vn.img.susercontent.com/file/34ab07e5d93204f3bccdf993f13242f7",
                },
                {
                    product_id: 14,
                    image: "https://down-vn.img.susercontent.com/file/0e711286a5301de38dba8a7163436101",
                },
                {
                    product_id: 14,
                    image: "https://down-vn.img.susercontent.com/file/b4f557785a48f2075d5593a1202e7b29",
                },
                {
                    product_id: 14,
                    image: "https://down-vn.img.susercontent.com/file/92b77984289b14a5bae50c64f8c93ce0",
                },
                {
                    product_id: 14,
                    image: "https://down-vn.img.susercontent.com/file/5445f4b1e467739f5ecc47477cc82bbf",
                },
                {
                    product_id: 15,
                    image: "https://down-vn.img.susercontent.com/file/669cf4b0327742538ac32fad5afbc5d4",
                },
                {
                    product_id: 15,
                    image: "https://down-vn.img.susercontent.com/file/b2333259af6094f0aaa19416e46979c5",
                },
                {
                    product_id: 15,
                    image: "https://down-vn.img.susercontent.com/file/sg-11134201-22100-lgwlr3wl54hv74",
                },
                {
                    product_id: 15,
                    image: "https://down-vn.img.susercontent.com/file/sg-11134201-22100-583kb4wl54hv86",
                },
                {
                    product_id: 16,
                    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lilgrpiqcdiuae",
                },
                {
                    product_id: 16,
                    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lilgrpiqds3ae1",
                },
                {
                    product_id: 16,
                    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lilgrpirlbp2d0",
                },
                {
                    product_id: 16,
                    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lilgrpiqf6nqb9",
                },
                {
                    product_id: 17,
                    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lilgrpiqcdiuae",
                },
                {
                    product_id: 17,
                    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lilgrpiqds3ae1",
                },
                {
                    product_id: 17,
                    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lilgrpirlbp2d0",
                },
                {
                    product_id: 17,
                    image: "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lilgrpiqf6nqb9",
                },
                {
                    product_id: 18,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134201-23020-26ni7pno23nv7c",
                },
                {
                    product_id: 18,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134201-23020-8kak3ono23nve5",
                },
                {
                    product_id: 18,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134201-23020-xizc3tno23nvbf",
                },
                {
                    product_id: 18,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134201-23020-2de1n3no23nvbd",
                },
                {
                    product_id: 19,
                    image: "https://down-vn.img.susercontent.com/file/6618f0691eb62e92d9db4a5625bf3c63",
                },
                {
                    product_id: 19,
                    image: "https://down-vn.img.susercontent.com/file/38dee3d5cde25efb14a5e73231a1d095",
                },
                {
                    product_id: 19,
                    image: "https://down-vn.img.susercontent.com/file/345b60f0bbe8ab90fa7007c4c47159e9",
                },
                {
                    product_id: 19,
                    image: "https://down-vn.img.susercontent.com/file/339e9057d3a0d16fb614218ff4676dd4",
                },
                {
                    product_id: 20,
                    image: "https://down-vn.img.susercontent.com/file/a398887a611cc9b659818f89a85e87d9",
                },
                {
                    product_id: 20,
                    image: "https://down-vn.img.susercontent.com/file/20787ec59a4c13cbec8a07eef3fa8a48",
                },
                {
                    product_id: 20,
                    image: "https://down-vn.img.susercontent.com/file/aea5ad83a91570e9eb274384f8a44742",
                },
                {
                    product_id: 20,
                    image: "https://down-vn.img.susercontent.com/file/a398887a611cc9b659818f89a85e87d9",
                },

                // Clothes women

                {
                    product_id: 21,
                    image: "https://down-vn.img.susercontent.com/file/818a3ce04f6b195ba6ce7ed21c4092cb",
                },
                {
                    product_id: 21,
                    image: "https://down-vn.img.susercontent.com/file/4d5e7c3576eb90819fea21909fd7b0f3",
                },
                {
                    product_id: 21,
                    image: "https://down-vn.img.susercontent.com/file/c81d2b4eaf14dfccd6fd8c2e1d39018b",
                },
                {
                    product_id: 21,
                    image: "https://down-vn.img.susercontent.com/file/34878fcbeadb22a4f447e3c76c23c4d6",
                },
                {
                    product_id: 22,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134201-23020-2hx6jv5c6jnv21",
                },
                {
                    product_id: 22,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134201-23020-x76lgk5c6jnvf3",
                },
                {
                    product_id: 22,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134201-23020-fb9poh5c6jnvb7",
                },
                {
                    product_id: 22,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134201-23020-b97n3i5c6jnv24",
                },
                {
                    product_id: 23,
                    image: "https://down-vn.img.susercontent.com/file/7a66736d8aea926d978effbdedb5590b",
                },
                {
                    product_id: 23,
                    image: "https://down-vn.img.susercontent.com/file/e4735191cc176991fc4845224d986101",
                },
                {
                    product_id: 23,
                    image: "https://down-vn.img.susercontent.com/file/7afec60df81485fc03d2fa0176190203",
                },
                {
                    product_id: 23,
                    image: "https://down-vn.img.susercontent.com/file/e5a3e8851eeb160b21fb370192faa4d7",
                },
                {
                    product_id: 24,
                    image: "https://down-vn.img.susercontent.com/file/6464b6388dc81ef709f5263165dca482",
                },
                {
                    product_id: 24,
                    image: "https://down-vn.img.susercontent.com/file/03796d2d708ccb470c2b6961e1cab9d9",
                },
                {
                    product_id: 24,
                    image: "https://down-vn.img.susercontent.com/file/e72f3e785e8068faa8f1ae717386feef",
                },
                {
                    product_id: 24,
                    image: "https://down-vn.img.susercontent.com/file/83d1130aefdbea19d007840f2893e228",
                },
                {
                    product_id: 25,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lixw7d64pexe7e",
                },
                {
                    product_id: 25,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-licwq1u3pr7w5c",
                },
                {
                    product_id: 25,
                    image: "https://down-vn.img.susercontent.com/file/328e4450d93593427789f4a1e73fe787",
                },
                {
                    product_id: 25,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lixw7d64qthu1a",
                },
                {
                    product_id: 26,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh8sneziylo273",
                },
                {
                    product_id: 26,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh8snezj2tde41",
                },
                {
                    product_id: 26,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh8snezj1esyee",
                },
                {
                    product_id: 26,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh8snezj5mia3d",
                },
                {
                    product_id: 27,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-leo6how9qtgy4d",
                },
                {
                    product_id: 27,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134201-23030-ree0ncbsgyove6",
                },
                {
                    product_id: 27,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134201-23030-n9wmfiiv5mov47",
                },
                {
                    product_id: 27,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134201-23030-n1ejmsdv5mov6d",
                },
                {
                    product_id: 28,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-licxy36vuvv6d9",
                },
                {
                    product_id: 28,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljtntsbt81is31",
                },
                {
                    product_id: 28,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-limfwr4dubpuf0",
                },
                {
                    product_id: 28,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-limfwr4drikye8",
                },
                {
                    product_id: 29,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfi54oykwi9we5",
                },
                {
                    product_id: 29,
                    image: "https://down-vn.img.susercontent.com/file/81db3aec45e555ada18535a4f2383b88",
                },
                {
                    product_id: 29,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfi34o830oskf3",
                },
                {
                    product_id: 29,
                    image: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-ipcx1mr5k3kv6e",
                },
                {
                    product_id: 30,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfks1bcposqd61",
                },
                {
                    product_id: 30,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfks1bcfqlx194",
                },
                {
                    product_id: 30,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfks1bcfp7cl13",
                },
                {
                    product_id: 30,
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfks1bczlkz9bf",
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("ProductImages", null, {});
    },
};

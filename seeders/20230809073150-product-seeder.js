"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Products",
            [
                // Clothes - 10
                // 1
                {
                    category_id: 1,
                    product_name:
                        "ÁO THUN TRƠN ĐEN TRẮNG BASIC NAM NỮ CỔ TRÒN BAO MỊN",
                    price: 40000,
                    description: ` Anubis Store - UNISEX CLOTHING - MẪU MÃ LẠ - CUNG CẤP VÀ IN ẤN ÁO THUN THEO YÊU CẦU CHO CÁ NHÂN, DOANH NGHIỆP, TEAMBUILDING
                LƯU Ý CHO SẢN PHẨM:
                - VUỐT ẢNH SANG BÊN PHẢI ĐỂ XEM CÁC MẪU 
                ✔ Nếu khách muốn mặc áo theo dạng form rộng, theo chuẩn xu hướng hiện nay, xin vui lòng chọn lớn hơn từ 1-2 size
                + Mặc ở nhà, đi tập thể thao, hay kết hợp với quần/váy... đều đẹp
                + Size cơ bản theo chuẩn quốc tế cho UNISEX (cả nam và nữ)
                + Có các Size: S M L XL XXL ( ib size hoặc ghi chú size trong đơn hàng giúp shop nha)
                + Có cả size cho 110kg, lh shop lấy link bigsize nhen hoặc vào shop xem ạ
                ✔ Với đơn hàng từ 50k, bạn được add mã MIỄN PHÍ VẬN CHUYỂN của Shopee phát hành vào đơn hàng.
                ------ Size tham khảo: (Lưu Ý: đây là áo form suông vừa, không rộng.Nếu Khách muốn mặc rộng vui lòng đặt lớn hơn 1 size)
                ▶ QUYỀN LỢI CỦA KHÁCH HÀNG:
                ✔ Được mua sản phẩm đúng như trên ảnh và đúng như mô tả.
                ✔ Mọi thắc mắc xin hãy vui lòng nhắn tin cho Shop, Shop sẽ tư vấn cho bạn nhiệt tình, bất kể ngày đêm.
                ✔ Nếu sản phẩm của Shop gửi sai hoặc phát sinh lỗi, Shop sẽ hỗ trợ đổi trả ngay và luôn, không lòng vòng.
                
                XIN CẢM ƠN QUÝ KHÁCH ĐÃ THAM KHẢO !
                TƯ VẤN: 079 897 5442 HOẶC INBOX SHOP  `,
                    likes: 4900,
                    star: 4.7,
                    quan_sold: 34800,
                    quan_in_stock: 3052,
                    origin: "Việt Nam",
                    fromCity: "TP. Hồ Chí Minh",
                    isMall: false,
                    discount: 0,
                },
                //2
                {
                    category_id: 1,
                    product_name:
                        "Áo khoác Hoodie Nam, Hoodie Basic Unisex Nỉ From Rộng Màu Đen",
                    price: 69000,
                    description: ` THÔNG TIN SẢN PHẨM
                ● Chât vải Vải nỉ sự kết hợp của 2 chất liệu là vải và len có khả năng giữ ấm tốt do trên bề mặt được bao phủi bởi một lớp lông ngắn mềm mượt.
                ● Giặt ko đổ lông hay bay màu
                ● Mềm mại này mang đến sự thoải mái và dễ chịu cho người mặc. Với sự chà xát của những lớp lông ngắn trên da cũng không khiến cho bạn có cảm giác ngứa ngáy mà hoàn toàn thoải mái
                
                  Shop có bảng size mẫu. Bạn NÊN INBOX, cung cấp chiều cao, cân nặng để SHOP TƯ VẤN SIZE.
                
                  BẢNG SIZE
                 ●Size M: Dưới 51 kg 
                 ● Size L: 52 - 61 kg
                 ●Size XL: 62-71 kg
                 ●Size XXL: 72-81 kg
                
                
                Lưu ý: Đây là bảng thông số chọn size cơ bản, tùy thuộc và vào mỗi người mà có thể +/- 1 Size
                
                 HƯỚNG DẪN SỬ DỤNG
                ● Lần đầu đem về chỉ xả nước lạnh rồi phơi khô để sợi vải và màu áo không bị xù, phai màu nhé. - Không nên ngâm bột giặt quá lâu
                ● Giặt ở nhiệt độ bình thường, với đồ có màu tương tự.
                ● Không được dùng hóa chất tẩy.
                ● Hạn chế sử dụng máy sấy và ủi (nếu có) thì ở nhiệt độ thích hợp.
                
                 LỢI ÍCH KHI MUA TẠI CỬA HÀNG CHÍNH HÃNG
                 Cam kết chất lượng và mẫu mã sản phẩm giống với hình ảnh.
                 Áo BASIC đầy đủ tem, mác, bao bì
                 Cam kết được đổi trả hàng trong vòng 5 ngày.
                 Hàng phải còn mới  và chưa qua sử dụng
                 Đổi trả miễn phí nếu sản phẩm bị lỗi do nhà sản xuất hoặc do đối tác vận chuyển.
                (*) Theo chính sách của Shopee `,
                    likes: 16400,
                    star: 3.8,
                    quan_sold: 9200,
                    quan_in_stock: 493553,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: false,
                    discount: 0,
                },
                //3
                {
                    category_id: 1,
                    product_name:
                        "Quần Short unisex nam nữ chất cotton cao cấp, phong cách thể thao, mặc thoáng mát, co dãn 4 chiều, quần đùi nam nữ, basic",
                    price: 48000,
                    description: `MÔ TẢ SẢN PHẨM

                Quần Short trơn và Quần Short Comp chất tổ ong cao cấp
                
                    ✪ Chất Liệu Vải :  cotton cao cấp 100%, co giãn 4 chiều, vải mềm, mịn, thoáng mát, không xù lông.
                
                    ✪ Kĩ thuật may: Đường may chuẩn chỉnh, tỉ mỉ, chắc chắn
                
                    ✪ Hình in: Công nghệ in tiên tiến đảm bảo độ bền màu và hình in ngay cả khi giặt máy.
                
                    ✪ Kiểu Dáng :Form Rộng Thoải Mái
                
                    ✪ Full size nam nữ : 40 - 85 kg
                
                
                
                I. SHOP CAM KẾT
                
                - Sản phẩm quần Short đùi Unisex cotton cao cấp giống mô tả 100%
                
                - Hình ảnh sản phẩm là ảnh thật, các hình hoàn toàn do shop tự thiết kế.
                
                - Kiểm tra  cẩn thận trước khi gói hàng giao cho Quý Khách
                
                - Hàng có sẵn, giao hàng ngay khi nhận được đơn 
                
                - Hoàn tiền nếu sản phẩm không giống với mô tả
                
                - Chấp nhận đổi hàng khi size không vừa trong 3 ngày.
                
                
                
                II. HỖ TRỢ ĐỔI TRẢ THEO QUY ĐỊNH CỦA SHOPEE
                
                - Điều kiện áp dụng (trong vòng 2 ngày kể từ khi nhận sản phẩm) 
                
                - Hàng hoá bị rách, in lỗi, bung chỉ, và các lỗi do vận chuyển hoặc do nhà sản xuất.
                
                1. Trường hợp được chấp nhận: 
                
                - Hàng giao sai size khách đã đặt hàng 
                
                - Giao thiếu hàng 
                
                2. Trường hợp không đủ điều kiện áp dụng chính sách: 
                
                - Quá 2 ngày kể từ khi Quý khách nhận hàng 
                
                - Gửi lại hàng không đúng mẫu mã, không phải sản phẩm của KARLEY STORE
                
                - Không thích, không hợp, đặt nhầm mã, nhầm màu,... `,
                    likes: 51000,
                    star: 4.8,
                    quan_sold: 42800,
                    quan_in_stock: 3283,
                    origin: "Trung Quốc",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 0,
                },
                //4
                {
                    category_id: 1,
                    product_name:
                        "ÁO THUN TRƠN ĐEN TRẮNG BASIC NAM NỮ CỔ TRÒN BAO MỊN",
                    price: 40000,
                    description: ` Anubis Store - UNISEX CLOTHING - MẪU MÃ LẠ - CUNG CẤP VÀ IN ẤN ÁO THUN THEO YÊU CẦU CHO CÁ NHÂN, DOANH NGHIỆP, TEAMBUILDING
                LƯU Ý CHO SẢN PHẨM:
                - VUỐT ẢNH SANG BÊN PHẢI ĐỂ XEM CÁC MẪU 
                ✔ Nếu khách muốn mặc áo theo dạng form rộng, theo chuẩn xu hướng hiện nay, xin vui lòng chọn lớn hơn từ 1-2 size
                + Mặc ở nhà, đi tập thể thao, hay kết hợp với quần/váy... đều đẹp
                + Size cơ bản theo chuẩn quốc tế cho UNISEX (cả nam và nữ)
                + Có các Size: S M L XL XXL ( ib size hoặc ghi chú size trong đơn hàng giúp shop nha)
                + Có cả size cho 110kg, lh shop lấy link bigsize nhen hoặc vào shop xem ạ
                ✔ Với đơn hàng từ 50k, bạn được add mã MIỄN PHÍ VẬN CHUYỂN của Shopee phát hành vào đơn hàng.
                ------ Size tham khảo: (Lưu Ý: đây là áo form suông vừa, không rộng.Nếu Khách muốn mặc rộng vui lòng đặt lớn hơn 1 size)
                ▶ QUYỀN LỢI CỦA KHÁCH HÀNG:
                ✔ Được mua sản phẩm đúng như trên ảnh và đúng như mô tả.
                ✔ Mọi thắc mắc xin hãy vui lòng nhắn tin cho Shop, Shop sẽ tư vấn cho bạn nhiệt tình, bất kể ngày đêm.
                ✔ Nếu sản phẩm của Shop gửi sai hoặc phát sinh lỗi, Shop sẽ hỗ trợ đổi trả ngay và luôn, không lòng vòng.
                
                XIN CẢM ƠN QUÝ KHÁCH ĐÃ THAM KHẢO !
                TƯ VẤN: 079 897 5442 HOẶC INBOX SHOP  `,
                    likes: 4900,
                    star: 4.7,
                    quan_sold: 34800,
                    quan_in_stock: 3052,
                    origin: "Việt Nam",
                    fromCity: "TP. Hồ Chí Minh",
                    isMall: false,
                    discount: 30,
                },
                //5
                {
                    category_id: 1,
                    product_name:
                        "Áo khoác Hoodie Nam, Hoodie Basic Unisex Nỉ From Rộng Màu Đen",
                    price: 69000,
                    description: ` THÔNG TIN SẢN PHẨM
                ● Chât vải Vải nỉ sự kết hợp của 2 chất liệu là vải và len có khả năng giữ ấm tốt do trên bề mặt được bao phủi bởi một lớp lông ngắn mềm mượt.
                ● Giặt ko đổ lông hay bay màu
                ● Mềm mại này mang đến sự thoải mái và dễ chịu cho người mặc. Với sự chà xát của những lớp lông ngắn trên da cũng không khiến cho bạn có cảm giác ngứa ngáy mà hoàn toàn thoải mái
                
                  Shop có bảng size mẫu. Bạn NÊN INBOX, cung cấp chiều cao, cân nặng để SHOP TƯ VẤN SIZE.
                
                  BẢNG SIZE
                 ●Size M: Dưới 51 kg 
                 ● Size L: 52 - 61 kg
                 ●Size XL: 62-71 kg
                 ●Size XXL: 72-81 kg
                
                
                Lưu ý: Đây là bảng thông số chọn size cơ bản, tùy thuộc và vào mỗi người mà có thể +/- 1 Size
                
                 HƯỚNG DẪN SỬ DỤNG
                ● Lần đầu đem về chỉ xả nước lạnh rồi phơi khô để sợi vải và màu áo không bị xù, phai màu nhé. - Không nên ngâm bột giặt quá lâu
                ● Giặt ở nhiệt độ bình thường, với đồ có màu tương tự.
                ● Không được dùng hóa chất tẩy.
                ● Hạn chế sử dụng máy sấy và ủi (nếu có) thì ở nhiệt độ thích hợp.
                
                 LỢI ÍCH KHI MUA TẠI CỬA HÀNG CHÍNH HÃNG
                 Cam kết chất lượng và mẫu mã sản phẩm giống với hình ảnh.
                 Áo BASIC đầy đủ tem, mác, bao bì
                 Cam kết được đổi trả hàng trong vòng 5 ngày.
                 Hàng phải còn mới  và chưa qua sử dụng
                 Đổi trả miễn phí nếu sản phẩm bị lỗi do nhà sản xuất hoặc do đối tác vận chuyển.
                (*) Theo chính sách của Shopee `,
                    likes: 16400,
                    star: 3.8,
                    quan_sold: 9200,
                    quan_in_stock: 493553,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: false,
                    discount: 20,
                },
                //6
                {
                    category_id: 1,
                    product_name:
                        "Quần Short unisex nam nữ chất cotton cao cấp, phong cách thể thao, mặc thoáng mát, co dãn 4 chiều, quần đùi nam nữ, basic",
                    price: 48000,
                    description: `MÔ TẢ SẢN PHẨM

                Quần Short trơn và Quần Short Comp chất tổ ong cao cấp
                
                    ✪ Chất Liệu Vải :  cotton cao cấp 100%, co giãn 4 chiều, vải mềm, mịn, thoáng mát, không xù lông.
                
                    ✪ Kĩ thuật may: Đường may chuẩn chỉnh, tỉ mỉ, chắc chắn
                
                    ✪ Hình in: Công nghệ in tiên tiến đảm bảo độ bền màu và hình in ngay cả khi giặt máy.
                
                    ✪ Kiểu Dáng :Form Rộng Thoải Mái
                
                    ✪ Full size nam nữ : 40 - 85 kg
                
                
                
                I. SHOP CAM KẾT
                
                - Sản phẩm quần Short đùi Unisex cotton cao cấp giống mô tả 100%
                
                - Hình ảnh sản phẩm là ảnh thật, các hình hoàn toàn do shop tự thiết kế.
                
                - Kiểm tra  cẩn thận trước khi gói hàng giao cho Quý Khách
                
                - Hàng có sẵn, giao hàng ngay khi nhận được đơn 
                
                - Hoàn tiền nếu sản phẩm không giống với mô tả
                
                - Chấp nhận đổi hàng khi size không vừa trong 3 ngày.
                
                
                
                II. HỖ TRỢ ĐỔI TRẢ THEO QUY ĐỊNH CỦA SHOPEE
                
                - Điều kiện áp dụng (trong vòng 2 ngày kể từ khi nhận sản phẩm) 
                
                - Hàng hoá bị rách, in lỗi, bung chỉ, và các lỗi do vận chuyển hoặc do nhà sản xuất.
                
                1. Trường hợp được chấp nhận: 
                
                - Hàng giao sai size khách đã đặt hàng 
                
                - Giao thiếu hàng 
                
                2. Trường hợp không đủ điều kiện áp dụng chính sách: 
                
                - Quá 2 ngày kể từ khi Quý khách nhận hàng 
                
                - Gửi lại hàng không đúng mẫu mã, không phải sản phẩm của KARLEY STORE
                
                - Không thích, không hợp, đặt nhầm mã, nhầm màu,... `,
                    likes: 51000,
                    star: 4.8,
                    quan_sold: 42800,
                    quan_in_stock: 3283,
                    origin: "Trung Quốc",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 10,
                },
                //7
                {
                    category_id: 1,
                    product_name:
                        "ÁO THUN TRƠN ĐEN TRẮNG BASIC NAM NỮ CỔ TRÒN BAO MỊN",
                    price: 40000,
                    description: ` Anubis Store - UNISEX CLOTHING - MẪU MÃ LẠ - CUNG CẤP VÀ IN ẤN ÁO THUN THEO YÊU CẦU CHO CÁ NHÂN, DOANH NGHIỆP, TEAMBUILDING
                LƯU Ý CHO SẢN PHẨM:
                - VUỐT ẢNH SANG BÊN PHẢI ĐỂ XEM CÁC MẪU 
                ✔ Nếu khách muốn mặc áo theo dạng form rộng, theo chuẩn xu hướng hiện nay, xin vui lòng chọn lớn hơn từ 1-2 size
                + Mặc ở nhà, đi tập thể thao, hay kết hợp với quần/váy... đều đẹp
                + Size cơ bản theo chuẩn quốc tế cho UNISEX (cả nam và nữ)
                + Có các Size: S M L XL XXL ( ib size hoặc ghi chú size trong đơn hàng giúp shop nha)
                + Có cả size cho 110kg, lh shop lấy link bigsize nhen hoặc vào shop xem ạ
                ✔ Với đơn hàng từ 50k, bạn được add mã MIỄN PHÍ VẬN CHUYỂN của Shopee phát hành vào đơn hàng.
                ------ Size tham khảo: (Lưu Ý: đây là áo form suông vừa, không rộng.Nếu Khách muốn mặc rộng vui lòng đặt lớn hơn 1 size)
                ▶ QUYỀN LỢI CỦA KHÁCH HÀNG:
                ✔ Được mua sản phẩm đúng như trên ảnh và đúng như mô tả.
                ✔ Mọi thắc mắc xin hãy vui lòng nhắn tin cho Shop, Shop sẽ tư vấn cho bạn nhiệt tình, bất kể ngày đêm.
                ✔ Nếu sản phẩm của Shop gửi sai hoặc phát sinh lỗi, Shop sẽ hỗ trợ đổi trả ngay và luôn, không lòng vòng.
                
                XIN CẢM ƠN QUÝ KHÁCH ĐÃ THAM KHẢO !
                TƯ VẤN: 079 897 5442 HOẶC INBOX SHOP  `,
                    likes: 4900,
                    star: 4.7,
                    quan_sold: 34800,
                    quan_in_stock: 3052,
                    origin: "Việt Nam",
                    fromCity: "TP. Hồ Chí Minh",
                    isMall: false,
                    discount: 30,
                },
                //8
                {
                    category_id: 1,
                    product_name:
                        "Áo khoác Hoodie Nam, Hoodie Basic Unisex Nỉ From Rộng Màu Đen",
                    price: 69000,
                    description: ` THÔNG TIN SẢN PHẨM
                ● Chât vải Vải nỉ sự kết hợp của 2 chất liệu là vải và len có khả năng giữ ấm tốt do trên bề mặt được bao phủi bởi một lớp lông ngắn mềm mượt.
                ● Giặt ko đổ lông hay bay màu
                ● Mềm mại này mang đến sự thoải mái và dễ chịu cho người mặc. Với sự chà xát của những lớp lông ngắn trên da cũng không khiến cho bạn có cảm giác ngứa ngáy mà hoàn toàn thoải mái
                
                  Shop có bảng size mẫu. Bạn NÊN INBOX, cung cấp chiều cao, cân nặng để SHOP TƯ VẤN SIZE.
                
                  BẢNG SIZE
                 ●Size M: Dưới 51 kg 
                 ● Size L: 52 - 61 kg
                 ●Size XL: 62-71 kg
                 ●Size XXL: 72-81 kg
                
                
                Lưu ý: Đây là bảng thông số chọn size cơ bản, tùy thuộc và vào mỗi người mà có thể +/- 1 Size
                
                 HƯỚNG DẪN SỬ DỤNG
                ● Lần đầu đem về chỉ xả nước lạnh rồi phơi khô để sợi vải và màu áo không bị xù, phai màu nhé. - Không nên ngâm bột giặt quá lâu
                ● Giặt ở nhiệt độ bình thường, với đồ có màu tương tự.
                ● Không được dùng hóa chất tẩy.
                ● Hạn chế sử dụng máy sấy và ủi (nếu có) thì ở nhiệt độ thích hợp.
                
                 LỢI ÍCH KHI MUA TẠI CỬA HÀNG CHÍNH HÃNG
                 Cam kết chất lượng và mẫu mã sản phẩm giống với hình ảnh.
                 Áo BASIC đầy đủ tem, mác, bao bì
                 Cam kết được đổi trả hàng trong vòng 5 ngày.
                 Hàng phải còn mới  và chưa qua sử dụng
                 Đổi trả miễn phí nếu sản phẩm bị lỗi do nhà sản xuất hoặc do đối tác vận chuyển.
                (*) Theo chính sách của Shopee `,
                    likes: 16400,
                    star: 3.8,
                    quan_sold: 9200,
                    quan_in_stock: 493553,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: false,
                    discount: 19,
                },
                // 9
                {
                    category_id: 1,
                    product_name:
                        "Quần Short unisex nam nữ chất cotton cao cấp, phong cách thể thao, mặc thoáng mát, co dãn 4 chiều, quần đùi nam nữ, basic",
                    price: 48000,
                    description: `MÔ TẢ SẢN PHẨM

                Quần Short trơn và Quần Short Comp chất tổ ong cao cấp
                
                    ✪ Chất Liệu Vải :  cotton cao cấp 100%, co giãn 4 chiều, vải mềm, mịn, thoáng mát, không xù lông.
                
                    ✪ Kĩ thuật may: Đường may chuẩn chỉnh, tỉ mỉ, chắc chắn
                
                    ✪ Hình in: Công nghệ in tiên tiến đảm bảo độ bền màu và hình in ngay cả khi giặt máy.
                
                    ✪ Kiểu Dáng :Form Rộng Thoải Mái
                
                    ✪ Full size nam nữ : 40 - 85 kg
                
                
                
                I. SHOP CAM KẾT
                
                - Sản phẩm quần Short đùi Unisex cotton cao cấp giống mô tả 100%
                
                - Hình ảnh sản phẩm là ảnh thật, các hình hoàn toàn do shop tự thiết kế.
                
                - Kiểm tra  cẩn thận trước khi gói hàng giao cho Quý Khách
                
                - Hàng có sẵn, giao hàng ngay khi nhận được đơn 
                
                - Hoàn tiền nếu sản phẩm không giống với mô tả
                
                - Chấp nhận đổi hàng khi size không vừa trong 3 ngày.
                
                
                
                II. HỖ TRỢ ĐỔI TRẢ THEO QUY ĐỊNH CỦA SHOPEE
                
                - Điều kiện áp dụng (trong vòng 2 ngày kể từ khi nhận sản phẩm) 
                
                - Hàng hoá bị rách, in lỗi, bung chỉ, và các lỗi do vận chuyển hoặc do nhà sản xuất.
                
                1. Trường hợp được chấp nhận: 
                
                - Hàng giao sai size khách đã đặt hàng 
                
                - Giao thiếu hàng 
                
                2. Trường hợp không đủ điều kiện áp dụng chính sách: 
                
                - Quá 2 ngày kể từ khi Quý khách nhận hàng 
                
                - Gửi lại hàng không đúng mẫu mã, không phải sản phẩm của KARLEY STORE
                
                - Không thích, không hợp, đặt nhầm mã, nhầm màu,... `,
                    likes: 51000,
                    star: 4.8,
                    quan_sold: 42800,
                    quan_in_stock: 3283,
                    origin: "Trung Quốc",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 29,
                },
                // 10
                {
                    category_id: 1,
                    product_name:
                        "Áo Polo Teelab Special chất cá sấu thoáng mát co dãn 4c , áo thun có cổ local brand nam nữ unisex form rộng",
                    price: 89000,
                    description: `MÔ TẢ SẢN PHẨM
          - Chất liệu: TC cá sấu
          
          - Form: Cơ bản
          
          - Thiết kế: Hình Typhography In cán lụa cao cấp
          
          - Bảo quản: Giặt với nước lạnh
          
           Cách chọn size: Teelab có bảng size mẫu. Nếu chưa biết lựa size bạn có thể inbox để được Teelab tư vấn. 
          
          Lưu ý : Áo Teelab là form rộng mặc thoải mái rồi không cần nhích size trừ trường hợp thích oversize size hẳn
          
           Hướng dẫn sử dụng sản phẩm Áo Teelab 
          
          - Giặt ở nhiệt độ bình thường, với đồ có màu tương tự. 
          
          - Không dùng hóa chất tẩy.
          
          - Hạn chế sử dụng máy sấy và ủi (nếu có) thì ở nhiệt độ thích hợp. 
          
           Chính sách Teelab 
          
          – Miễn phí đổi hàng cho khách mua ở TEELAB trong trường hợp bị lỗi từ nhà sản xuất, giao nhầm hàng, bị hư hỏng trong quá trình vận chuyển hàng.
          
          – Sản phẩm đổi trong thời gian 3 ngày kể từ ngày nhận hàng
          
          – Sản phẩm còn mới nguyên tem, tags và mang theo hoá đơn mua hàng, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác nhân bên ngoài cửa hàng sau khi mua hàng.
          
          TEELAB -  Green Generation nơi bạn có thể thỏa sức thử nghiệm phong cách của mình. Được thành lập vào 2020 với rất nhiều những sự biến động của xã hội, TEELAB bắt đầu chặng đường viết lên câu chuyện của riêng mình. Khi văn hóa đường phố dần trở nên phổ biến hơn cũng là lúc nhu cầu được thỏa mãn đam mê về thời trang của những GenZ mãnh liệt hơn bao giờ hết. TEELAB, phòng thí nghiệm về thời trang và những thiết kế mang đậm tinh thần TEELAB của chúng tôi “Your body is your greatest canvas” hứa hẹn sẽ mang đến cho các bạn trẻ Việt Nam nhiều trải nghiệm thú vị và mới mẻ về thời trang đường phố. Đội ngũ Fashion Scientist của TEELAB luôn cố gắng hoàn thiện và phát triển sản phầm, để có thể mang tới cho khách hàng những sản phẩm có chất lượng tốt nhất, được nghiên cứu kỹ càng và đáp ứng những tiêu chuẩn điên rồ nhất từ phòng thí nghiệm của chúng tôi.`,
                    likes: 2300,
                    star: 4.5,
                    quan_sold: 91000,
                    quan_in_stock: 35856,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 47,
                },

                // Phone - 10
                // 11
                {
                    category_id: 2,
                    product_name: "Ốp lưng chống sốc iPhone 6 6s 6plus 6splus 7 7plus 8plus x xs xsmax 11 12 13 14 pro max promax trong suốt chống va đập",
                    price: 11000,
                    description: `MÔ TẢ SẢN PHẨM
                    Ốp lưng iphone 5/5s/6/6plus/6s/6s plus/6/7/7plus/8/8plus/x/xs/xs max/11/11 pro/11 promax
                    
                    PKĐỏ đảm bảo:
                    - Mang lại cho quý khách những sản phẩm tốt nhất, đẹp nhất.
                    - Nếu hàng bị lỗi do sản xuất.  cam kết sẽ hoàn tiền hoặc gửi lại sản mới thay thế cho quý khách.
                    - Thương hiệu tạo niềm tin!
                    
                    Mô tả sản phẩm:
                    - Thiết kế: Bo khít máy
                    - Chất liệu: Nhựa dẻo
                    - Dòng máy tương thích: Ốp iphone 5/5s/6/6plus/6s/6s plus/6/7/7plus/8/8plus/x/xs/xs max/11/11 pro/11 promax
                    - Xuất xứ: Việt Nam
                    
                    Quý khách lưu ý:
                    - Khi đặt hàng Quý khách vui lòng ghi chú vào đơn hàng khi cần có thêm thông tin như : màu sắc, kiểu, dáng thời gian Quý khách có thể nhận hàng.
                    - Khi nhận được hàng Quý khách vui lòng bỏ chút thời gian để đánh giá cho shop, để shop có chiều hướng phục vụ tốt hơn cho Quý khách.
                    #bao #op #lung #iphone #dien #thoai #phu #kien #chong #ban #iphone 5 #iphone5s #iphone6 #iphone6s iphone6 #iphone6splus #iphone7 #iphone8 #iphone7 #iphone8plus #iphonex #iphonexs #iphonexsmax #iphone11 #iphone11pro #iphone11promax #oplung #oplungiphone #opiphone #opdienthoai #shincase #phukienkoreancase #opchongban #chongban #oplungdienthoaiiphone #oplungip #opip`,
                    likes: 5600,
                    star: 4.6,
                    quan_sold: 196000,
                    quan_in_stock: 3144 ,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 0,
                },
                // 12
                {
                    category_id: 2,
                    product_name: "Ốp Điện Thoại Acrylic Trong Suốt Chống Sốc Cho iPhone 14 11 12 13 Pro Max XS Max X XR",
                    price: 26000,
                    description: `MÔ TẢ SẢN PHẨM
                    💕 (^ _-) Chào mừng bạn đến với WUJU Enterprise Store!😊
                    
                    
                    
                    💕 (^ _-) Chúng tôi là một nhà sản xuất chuyên nghiệp! Chất lượng sản phẩm, dịch vụ và giá cả được đảm bảo!
                    
                    
                    
                    😊Lưu ý:
                    
                    1: Nếu bạn cần đặt nhiều mặt hàng có màu sắc và mẫu mã khác nhau, bạn chỉ cần thêm vào giỏ hàng trước, sau đó thanh toán vào giỏ hàng để hoàn tất.
                    
                    2: Do số lượng SKU có hạn, không thể liệt kê tất cả các màu hoặc mô hình, Nếu bạn cần đặt hàng mẫu mã hoặc màu sắc khác với điều này, bạn có thể liên hệ với bộ phận chăm sóc khách hàng trực tuyến của chúng tôi.
                    
                    
                    
                    👍Đặc điểm:
                    
                    
                    
                    💯【Vỏ Bảo vệ TPU bền】
                    
                    Cao su TPU cao cấp với lớp bề mặt nhẵn. Độ dày tăng: 2.3mm. (Thông Thường chỉ 1,8 mm). Chống dấu vân tay, chống trầy xước hiệu suất, bảo vệ chống rơi
                    
                    
                    
                    😘【Hỗ Trợ bộ sạc không dây】
                    
                    Có thể được sử dụng với sạc không dây. Ốp lưng điện thoại TPU chất lượng cao, tương thích với dòng iPhone 7 đến 14.
                    
                    
                    
                    💖【Bảo Vệ toàn thân】
                    
                    Thiết kế bên ngoài chống va đập 1mm, có thể nâng lên một chút phía trên màn hình để bảo vệ màn hình iPhone hoặc camera không bị rơi hoặc đặt bề mặt hướng xuống
                    
                    
                    
                    😍【Lựa Chọn nhiều màu】
                    
                    Cung cấp cho bạn nhiều màu sắc vỏ cho bạn lựa chọn, làm cho cuộc sống của bạn trở nên đầy màu sắc hơn
                    
                    
                    
                    🤗Tương thích thương hiệu: Apple iPhone
                    
                    Loại: Vỏ chống va đập
                    
                    Tương thích cho các dòng iPhone:
                    
                    Iphone 7 = iPhone 8 = SE 2020 = SE 2022
                    
                    Iphone 7 Plus = iPhone 8 Plus
                    
                    Iphone X = iPhone XS
                    
                    Iphone XR
                    
                    Iphone XS Max
                    
                    Iphone 11
                    
                    Iphone 11 Pro
                    
                    Iphone 11 Pro Max
                    
                    Iphone 12
                    
                    Iphone 12 Pro
                    
                    Iphone 12 Pro Max
                    
                    Iphone 13
                    
                    Iphone 13 Pro
                    
                    Iphone 13 Pro Max
                    
                    Iphone 14
                    
                    Iphone 14 Plus
                    
                    Iphone 14 Pro
                    
                    Iphone 14 Pro Max
                    
                    
                    
                    🎁Gói bao gồm 1 x Vỏ chống va đập
                    
                    
                    
                    🤙Dịch vụ của chúng tôi &gt;&gt;&gt;
                    
                    1. Vận chuyển nhanh 1-2 ngày + trả lời nhanh chóng và nhiệt tình + thái độ tích cực;
                    
                    2. Nhanh chóng giải quyết vấn đề cho từng khách hàng;
                    
                    3. Hủy hỗ trợ vận chuyển! Hỗ trợ trộn màu! Hỗ trợ bán sỉ!
                    
                    
                    
                    💖Phản hồi&gt;&gt;&gt;
                    
                    Chúng tôi phụ thuộc vào sự hài lòng của khách hàng để thành công. Do đó, phản hồi tích cực của bạn và đánh giá 5 sao là cực kỳ quan trọng đối với chúng tôi. Nếu bạn hài lòng với sản phẩm của chúng tôi, xin vui lòng dành một phút đánh giá tích cực cho chúng tôi! Cảm ơn bạn!
                    
                    
                    
                    💕 (^ _-) Thêm nhiều phụ kiện điện thoại di động, vỏ điện thoại, kính cường lực, tai nghe Bluetooth, cáp và bộ sạc...Tìm kiếm cửa hàng: wuju, đó là giá thấp nhất trên toàn bộ Internet.`,
                    likes: 1600,
                    star: 4.5,
                    quan_sold: 20300,
                    quan_in_stock: 35856,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 47,
                },
                // 13
                {
                    category_id: 2,
                    product_name: "【VẬN CHUYỂN NHANH】ốp lưng điẹn thoại màu tím đậm mới phi hành gia dễ thương cho iphone 11 12 13 14 Pro Max",
                    price: 30000,
                    description: `MÔ TẢ SẢN PHẨM
                    FreeShip toàn quốc cho đơn hàng từ 50k ( Tối Đa 30K ) - nhập mã Freeship của shopee vào nhé 
                   
                   Chào mừng bạn đến với cửa hàng gongonshop
                   
                   Chúng tôi là nhà cung cấp phụ kiện điện thoại 3C chuyên nghiệp.
                   
                   Cửa hàng của Nhà máy. Mới 100!
                   
                   Giá của chúng tôi là thấp nhất, với chất lượng và dịch vụ hàng đầu.
                   
                   Hỗ trợ dropshipping! Hỗ trợ chọn màu hỗn hợp! Hỗ trợ bán sỉ! 
                   
                   Chúng tôi ở TP.HCM, sau khi nhận được đơn hàng chúng tôi sẽ gửi hàng trong thời gian nhanh nhất, rất hân hạnh được phục vụ quý khách.
                   
                   
                   Kiểu: Vỏ sáng bóng + Đế phi hành gia
                   Kiểu: bao gồm vỏ bảo vệ
                   Chức năng: thời trang
                   Chức năng: Vỏ bảo vệ chống rơi
                   Chức năng: chống va đập
                   Lưu lượng ghi: chào mừng
                   Chức năng: Vỏ chống cháy nổ / chống bám bẩn
                   Thương hiệu tương thích: Apple iPhone 13 14 Series
                   
                   ƯU ĐIỂM 
                   - Ốp lưng iphone hở táo, Ốp lưng iphone mạ Điện 6D chống rơi, mẫu mã sang trọng, tinh tế 
                   - Đệm bốn góc và túi khí bên chống rơi.
                   - Cảm giác cao cấp mới về màu sắc nhỏ và tươi mới, đơn giản và phóng khoáng. Thích hợp cho iPhone.
                   - Thiết kế viền cao hơn để bảo vệ ống kính.
                   - Silicon cao cấp chống trượt ở bên cạnh, vị trí lỗ chính xác trên phím bên.,
                   - Bảo vệ điện thoại của bạn khỏi bụi, trầy xước, vết cắn và sốc điện
                   - Chống Sốc, chống trầy xước, chống dấu vân tay, không nhờn.
                   - Tích hợp bảo vệ camera`,
                    likes: 2300,
                    star: 4.5,
                    quan_sold: 91000,
                    quan_in_stock: 35856,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 47,
                },
                //14
                {
                    category_id: 2,
                    product_name: "",
                    price: 89000,
                    description: ``,
                    likes: 2300,
                    star: 4.5,
                    quan_sold: 91000,
                    quan_in_stock: 35856,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 47,
                },
                //15
                {
                    category_id: 2,
                    product_name: "",
                    price: 89000,
                    description: ``,
                    likes: 2300,
                    star: 4.5,
                    quan_sold: 91000,
                    quan_in_stock: 35856,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 47,
                },
                //16
                {
                    category_id: 2,
                    product_name: "",
                    price: 89000,
                    description: ``,
                    likes: 2300,
                    star: 4.5,
                    quan_sold: 91000,
                    quan_in_stock: 35856,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 47,
                },
                //17
                {
                    category_id: 2,
                    product_name: "",
                    price: 89000,
                    description: ``,
                    likes: 2300,
                    star: 4.5,
                    quan_sold: 91000,
                    quan_in_stock: 35856,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 47,
                },
                //18
                {
                    category_id: 2,
                    product_name: "",
                    price: 89000,
                    description: ``,
                    likes: 2300,
                    star: 4.5,
                    quan_sold: 91000,
                    quan_in_stock: 35856,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 47,
                },
                //19
                {
                    category_id: 2,
                    product_name: "",
                    price: 89000,
                    description: ``,
                    likes: 2300,
                    star: 4.5,
                    quan_sold: 91000,
                    quan_in_stock: 35856,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 47,
                },
                //20
                {
                    category_id: 2,
                    product_name: "",
                    price: 89000,
                    description: ``,
                    likes: 2300,
                    star: 4.5,
                    quan_sold: 91000,
                    quan_in_stock: 35856,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 47,
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Categories", null, {});
    },
};

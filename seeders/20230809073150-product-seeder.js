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
                    product_name: "Ốp Điện Thoại TPU Mềm Trong Suốt Chống Sốc Chống Bụi Tương Thích Cho IPhone 14 13 12 11 Pro Max X XR 8 7 Plus Xs Max",
                    price: 89000,
                    description: `MÔ TẢ SẢN PHẨM
                    Mô tả sản phẩm &gt;&gt;&gt;

                    【Vỏ Tpu bền】
                    
                    Cao su TPU chất lượng cao, lớp bề mặt nhẵn. Độ dày được nâng cấp: 2.3mm. (Bình Thường 1,8 mm).Chống dấu vân tay, chống trầy xước hiệu suất, bảo vệ chống rơi

                    【Hỗ Trợ bộ sạc không dây】
                    
                    Có THỂ LÀM VIỆC với bộ sạc không dây. Ốp lưng TPU chất lượng cao tương thích với màn hình ốp lưng điện thoại iPhone 7-13 "

                    【Bảo Vệ Toàn thân】
                    
                    Thiết kế bên ngoài chống va đập 1mm, nâng đỉnh màn hình một chút, bảo vệ màn hình iphone hoặc camera của bạn không bị rơi hoặc đặt úp mặt trên bề mặt

                    【Nút Chính xác】
                    
                    Truy cập vào tất cả các cổng, điều khiển và cảm biến. Các nút cảm thấy nhạy cảm
                    Các mẫu iPhone tương thích:
                    
                    Iphone 7/8
                    
                    Iphone 7Plus / 8Plus
                    
                    Iphone X / XS
                    
                    Iphone XS max
                    
                    Iphone XR
                    
                    Iphone 11
                    
                    Iphone 11 Pro
                    
                    Iphone 11 Pro Max
                    
                    Iphone 12
                    
                    Iphone 12 mini
                    
                    Iphone 12 Pro
                    
                    Iphone 12 Pro Max
                    
                    Iphone 13
                    
                    Iphone 13 mini
                    
                    Iphone 13 Pro
                    
                    Iphone 13 Pro Max
                    
                    Iphone 14
                    
                    Iphone 14 plus
                    
                    Iphone 14 pro
                    
                    Iphone 14 Pro Max
                    
                    Gói bao gồm: 1 x Vỏ điện thoại
                
                    Ghi chú:
                    
                    -Do Sự khác biệt giữa các màn hình khác nhau, hình ảnh có thể không phản ánh màu sắc thực tế của sản phẩm.
                    
                    -Xin Vui lòng cho phép sai số 1-3 cm do đo lường thủ công.

                    Dịch vụ của chúng tôi &gt;&gt;&gt;
                    
                    1. 1-2 ngày vận chuyển nhanh + Trả lời ấm áp kịp thời + Thái độ tích cực;
                    
                    2. Nhanh chóng giải quyết các vấn đề cho mọi khách hàng;
                    
                    3. Hỗ trợ dropshipping! Hỗ trợ chọn màu hỗn hợp! Hỗ trợ bán sỉ!

                    Phản hồi &gt;&gt;&gt;
                    
                    Chúng tôi phụ thuộc vào sự hài lòng của khách hàng để thành công. Do đó, phản hồi tích cực của bạn và đánh giá 5 sao là cực kỳ quan trọng đối với chúng tôi. Nếu bạn hài lòng với sản phẩm của chúng tôi, xin vui lòng dành một phút để cho chúng tôi một đánh giá tích cực! Cảm ơn bạn!`,
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
                    product_name: "Ốp Điện Thoại Thời Trang Cho iPhone 14 13 12 11 6 6s 7 8 Plus X Xr Xs Max 11 12 Pro Max SE 2020",
                    price: 11900,
                    description: `MÔ TẢ SẢN PHẨM
                    ⭐Thương hiệu: glow_worm⭐ Vỏ cho iPhone 14 13 12 11 6 6s 7 8 Plus X Xr Xs Max 11 12 Pro Max SE 2020 Vỏ điện thoại >>>>>>> Thông báo <<<<<<<< 🌸Nếu bạn nhận được sản phẩm bị hỏng, vui lòng liên hệ với chúng tôi và chúng tôi sẽ gửi cho bạn voucher tốt nhất để bồi thường 🌸Vui lòng đảm bảo địa chỉ / số điện thoại / kiểu điện thoại của bạn là chính xác vì chúng tôi không thể thay đổi thông tin 🌸Bạn có thể tìm kiếm model điện thoại của mình trong cửa hàng của chúng tôi để xem thêm nhiều kiểu dáng 🌸Hoan nghênh bạn theo dõi cửa hàng của chúng tôi để nhận được chiết khấu hấp dẫn nhất 🌸Hoan nghênh khách hàng thân mến, liên hệ với chúng tôi trước khi đặt hàng để nhận được nhiều voucher mua sắm hấp dẫn hơn >>>>>>> Thông tin sản phẩm <<<<<<<< 🌸Đặc trưng: Chống trầy xước 🌸Các tính năng: Dễ dàng cài đặt 🌸Bảo vệ điện thoại của bạn khỏi bụi bẩn, trầy xước và va đập. 🌸Gói bao gồm: 1 * chiếc trường hợp 🌸Hàng mới 100% 🌸Vừa vặn với điện thoại của bạn >>>>>>> Thông tin vận chuyển <<<<<<<< 🌸Đơn hàng sẽ được vận chuyển trong vòng 2 ngày 🌸Tất cả các sản phẩm được do nền tảng SHOPEE vận chuyển 🌸Cod có sẵn 🌸Tất cả các sản phẩm đều có KHO SN SÀNG`,
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
                    product_name: "Ốp Điện Thoại Acrylic Cứng Trong Suốt Chống Sốc Có Nút Kim Loại Bảo Vệ Camera Cho iPhone 14 Pro Max 13 Pro Max 12 11 7Plus 6sPlus 8Plus",
                    price: 40000,
                    description: `MÔ TẢ SẢN PHẨM
                    ⭐Mẫu mã chất lượng siêu cao! 
                    
                     ⭐Tất cả các sản phẩm có trong kho!
                    
                     ⭐Nhà cung cấp tất cả các sản phẩm trong shop ⇣
                    
                     ⇢Tất cả đều được lựa chọn nghiêm ngặt các nhà cung cấp thương hiệu chất lượng cao và xác thực 

                     Giới thiệu model iPhone tương thích:
                    
                     Iphone 14 Pro Max
                    
                     Iphone 14 Pro
                    
                     Iphone 14 Tối đa
                    
                     Iphone 14 
                    
                     Iphone 13 Pro Max
                    
                     Iphone 13 Pro
                    
                     Iphone 13
                    
                     Iphone 12 Pro Max
                    
                     Iphone 12 Pro
                    
                     Iphone 12
                    
                     Iphone 11 Pro Max
                    
                     Iphone 11
                    
                     Iphone XR
                    
                     Iphone (6 / 6s / 7/8) Plus
                    
                    #Iphone13case #Iphone 13 #Iphone13pro tôi#Phone13promax #Iphonecase #Caseiphone #Casingiphone #Casingiphone11 #Casingiphone11promax #Casingiphone12 #Casingiphone12promaxcase #Iphone11case #Iphone11promaxcase

                    #Iphone12case #Iphone 12procase #Iphone12promaxcase #Iphone7pluscase #Iphone11 #Iphone11promax #Iphone12
                   
                    #Iphone12promax #Shockproofcase #Shockproofcaseiphone
                   
                    #Antiiphonecase`,
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
                    product_name: "Ốp da iphone hình Ferrari THT cho Iphone 6plus 7plus x/xsmax/11/12/13/14/Pro/Promax",
                    price: 45000,
                    description: `MÔ TẢ SẢN PHẨM
                    Ốp Lưng Da iPhone Chính Hãng THT  
                    Cho 6plus/7plus/x/xsmax11/11Promax/12/12Pro/12ProMax/13/13Pro/13ProMax/14P/ProMax sang trọng
                    
                    ✓ THT luôn luôn là nơi Bạn có thể lựa chọn các sản phẩm bao da, ốp lưng điện thoại cao cấp,
                    
                    ✓ Chọn lọc các mẫu mới nhất, có thiết kế đẹp được người dùng đánh giá cao,
                    
                    ✓ Thiết kế đa dạng kiểu dáng ấn tượng độc đáo, bạn sẽ có cơ hội thể hiện phong cách cá tính của riêng mình.
                    
                    Bạn đang phân vân không biết nên mua bao da hay ốp lưng?
                    ➣ Bạn thích sự đơn giản gọn nhẹ và tiện dụng thì việc sử dụng ốp lưng thích hợp hơn, đặc biệt là lúc nghe gọi sẽ không mất công mở nắp bao da. Ốp lưng còn cho thấy sự trẻ trung, năng động, cá tính với nhiều màu sắc & thiết kế đa dạng giúp bạn thể hiện phong cách riêng,
                    ➣ Còn nếu Bạn cần bảo vệ tối đa toàn diện cả mặt trước và sau của điện thoại thì bao da là sự là sự lựa chọn phù hợp hơn. Ngoài ra bao da sẽ giúp cho bạn trở nên sang trọng, lịch lãm & quý phái hơn.
                    
                    Đừng bỏ qua mẫu Ốp Lưng Da iPhone 6plus/7plus/x/xsmax11/11Promax/12/12Pro/12ProMax/13/13Pro/13ProMax/14P/ProMax 
                    
                    • Chất liệu: Da PU
                    
                    • Màu: Xanh, Đen, Da bò
                    
                    • Thiết kế chống sốc bảo vệ thân máy khi rơi rớt
                    
                    • Ít bám dấu vân tay, mồ hôi tay, chống xước tốt
                    
                    • Ôm khít máy, tháo lắp dễ dàng
                    
                    • Bảo vệ khu vực camera khỏi va chạm
                    
                    • Hàng sản xuất và phân phối chính hãng bởi THTSHOP
                    
                    ☞ Còn chờ gì nữa mà không nhanh tay đặt mua ngay cho mình 1 chiếc Ốp Lưng Da iPhone THẮT
                    
                    ------------------------------------------------------------------------------
                    THTSHOP
                    - Tự hào là chuỗi cửa hàng lớn và  phân phối sỉ  tại khắp các tỉnh trên cả nước Hà Nội,TP HCM,  Hải Phòng, Quảng Ninh, Ninh Bình, Phú Thọ, Nam Định ….
                    - Uy tín đã được đảm bảo với hàng nghìn, hàng vạn đơn trên khắp cả nước 
                    - Tuyển sỉ, CTV khắp cả nước
                     - Hàng luôn đảm bảo sẵn đầy kho, giá xưởng, Chính hãng 100% ( GỌI LÀ CÓ – ĐẶT LÀ SHIP ) 
                    UY TÍN TẠO NIỀM TIN.
                    🏠 Địa chỉ: 
                    - CS1: 524 Trần Cung, Bắc Từ Liêm, HN
                    - CS2: Số 343 Trần Cung, Bắc Từ Liêm, HN 
                    ✅ Cam kết: 
                    - Giá vẫn là ngon nhất thị trường ở đâu rẻ hơn hoàn tiền bất kể mọi lý do.
                    - Bao ae check test trong vòng một tuần ko thích trả lại, hoàn tiền 100% 
                    ✅ Ship nội thành hoả tốc có ngay. Ae ở Hà Nội bây giờ đã có AHA khi bạn đặt hàng nhớ chọn đón vị vận chuyển HỎA TỐC bạn sẽ nhận được hàng ngay (NHẮN TIN BÁO SHOP)
                    
                    #op #oplung #opdienthoai #oplungdienthoai #opiphone #opip #oplungip #oplungiphone #op_lung_iphone #oplungiphone #ốp_iphone #ốp_lưng #ốp_iphone_7 #ốp_iphone_8 #ốp_iphone_7_plus `,
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
                    product_name: "Ốp Điện Thoại Da Cừu Mềm Chống Sốc Họa Tiết Mặt Cười Cho iphone 14 promax 14 pro 14 Plus 11 12 13 / 6 / 7 / 8plus / X max",
                    price: 36000,
                    description: `MÔ TẢ SẢN PHẨM
                    Phong cách: Bao gồm tất cả
                    
                    Chất liệu: Da giả
                    
                    Các yếu tố phổ biến: Văn bản, DIY
                    
                    Quy trình: Dập nổi kim loại
                    
                    Màu sắc: Mặt cười khâu tối
                    
                    Phong cách: Trung Quốc-Kiểu dáng
                    
                    Chức năng: Chống va đập, Chống va đập, Chống dấu vân tay
                    
                    💥Phù hợp cho:
                
                    Đối với Iphone 7/8 / SE2

                    Đối với Iphone 7plus / 8plus

                    Đối với Iphone X / XS

                    Dành cho Iphone XR 

                    Đối với Iphone XS MAX  

                    Đối với Iphone 11
                    
                    Đối với Iphone 11Pro

                    Đối với Iphone 11 Pro Max

                    Cho Iphone 12mini

                    Dành cho Iphone 12

                    Đối với Iphone 12Pro

                    Cho Iphone 12promax

                    Cho Iphone 13mini

                    Đối với Iphone 13
                    
                    Đối với Iphone 13 Pro
                    
                    Đối với Iphone 13 Promax

                    Dành cho Iphone 14 【6.1】, Iphone 14pro 【6.1】, Iphone 14 Plus 【6.7】, Iphone 14promax 【6.7】`,
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
                    product_name: "Ốp viền vuông gấu hở logo táo Bảo vệ camera, Cho iphone 7/8/x/xsmax/11/12/13/Pro/Promax/Plus",
                    price: 25000,
                    description: `MÔ TẢ SẢN PHẨM
                    THTOFFICIAL
                    - Tự hào là chuỗi cửa hàng lớn và  phân phối sỉ  tại khắp các tỉnh trên cả nước Hà Nội,TP HCM,  Hải Phòng, Quảng Ninh, Ninh Bình, Phú Thọ, Nam Định ….
                    - Uy tín đã được đảm bảo với hàng nghìn, hàng vạn đơn trên khắp cả nước 
                    - Tuyển sỉ, CTV khắp cả nước
                     - Hàng luôn đảm bảo sẵn đầy kho, giá xưởng, Chính hãng 100% ( GỌI LÀ CÓ – ĐẶT LÀ SHIP ) 
                    UY TÍN TẠO NIỀM TIN.
                    🏠 Địa chỉ: 
                    - CS1: 524 Trần Cung, Bắc Từ Liêm, HN
                    - CS2: Số 2 Ngõ 75 Cổ Nhuế, Bắc Từ Liêm, HN 
                    ✅ Cam kết: 
                    - Giá vẫn là ngon nhất thị trường ở đâu rẻ hơn hoàn tiền bất kể mọi lý do.
                    - Bao ae check test trong vòng một tuần ko thích trả lại, hoàn tiền 100% 
                    ✅ Ship nội thành hoả tốc có ngay. Ae ở Hà Nội bây giờ đã có AHA khi bạn đặt hàng nhớ chọn đón vị vận chuyển HỎA TỐC bạn sẽ nhận được hàng ngay (NHẮN TIN BÁO SHOP) 
                    -----------------------------------------------------------------------------------------
                    MÔ TẢ SẢN PHẨM
                     Ốp Gấu Bearbrick 3D hở táo iphone 7plus 8plus   X Xs Xsmax 11 promax 12 12promax 13 pro max trong suốt bảo vệ camera silicon 
                    
                     Thông tin sản phẩm: 
                    - Chất liệu:  Viền nhựa dẻo , trong suốt.
                    - Màu sắc: Nhiều Màu.
                    - Ốp lưng được đóng gói bằng túi nilon thiết kế đẹp.
                    - Hình ảnh chất lượng cao,sắc nét, không phai màu.
                    - Hình ảnh thiết kế đẹp, phong cách, trẻ trung.
                    - Công dụng: Là phụ kiện thời trang, thay đổi màu sắc cho điện thoại, giữ điện thoại chắc chắn trên tay, an toàn chống trầy xước,  bảo vệ chiếc điện thoại khỏi va đập.
                    
                    Lưu ý:
                    Hình gấu tương tự nhau nên giao màu ngẫu nhiên
                    
                    #op #lung #iphone #dien #thoai #phu #kien #inhinh #deo #chong #ban #hanquoc #case #iphonex #iphonexsmax #iphone11 #iphone11promax  #opiphone #oplung #oplungiphone  #iphone12mini #iphone12 #iphone12pro #iphone12promax#iphone13 #iphone13pro #iphone13promax`,
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
                    product_name: "Ốp Điện Thoại Da Cừu Mềm Chống Sốc Hình Trái Tim Cho iphone 14 pro 14 promax 11 12 pro max 13 / 6 / 7 / 8plus / X max",
                    price: 89000,
                    description: `MÔ TẢ SẢN PHẨM
                    Dành cho thương hiệu: Apple
                    
                    Phong cách: Bao gồm tất cả
                    
                    Chất liệu: Da giả
                    
                    Phong cách: Trung Quốc-Kiểu dáng
                    
                    Các yếu tố phổ biến: Sọc, Chữ, Hình học
                    
                    Quy trình: Dập nổi kim loại
                    
                    Màu sắc: Chrome Hearts
                    
                    💥Phù hợp cho:

                    Đối với Iphone 7/8 / SE2

                    Đối với Iphone 7plus / 8plus

                    Dành cho Iphone X / XS

                    Cho Iphone XR 

                    Cho Iphone XS MAX  

                    Cho Iphone 11

                    Đối với Iphone 11Pro

                    Đối với Iphone 11 Pro Max

                    Đối với Iphone 12mini

                    Cho Iphone 12

                    Cho Iphone 12Pro

                    Cho Iphone 12promax

                    Đối với Iphone 13mini
  
                    Cho Iphone 13

                    Đối với Iphone 13 Pro

                    Đối với Iphone 13 Promax

                    Dành cho Apple14 【6.1】, Apple14pro 【6.1】, Apple14 Plus 【6.7】, Apple14promax 【6.7】`,
                    likes: 2300,
                    star: 4.5,
                    quan_sold: 91000,
                    quan_in_stock: 35856,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 47,
                },

                // Clothes woment - 10
                // 21
                {
                    category_id: 3,
                    product_name: "Áo giữ nhiệt nữ CÓ LÓT NỈ cổ cao 3P dáng ôm dày dặn co giãn - NhiNhi Shop",
                    price: 19000,
                    description: `MÔ TẢ SẢN PHẨM
                    THÔNG TIN VỀ SẢN PHẦM
                    - Áo giữ nhiệt dài 52cm
                    - Co giãn khá tốt, free size cho các bạn từ 40-55kg tùy chiều cao
                    - Hàng Xưởng, có các màu như ảnh shop chụp và quay video nhé các bạn
                    
                    NHINHISHOP CAM KẾT 
                    - Cam kết ảnh chụp sản phẩm thật
                    - Hàng lỗi do bên shop đổi trả trong vòng 03 ngày theo đúng quy định của shopee.
                    - Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.
                    
                    LƯU Ý
                    - Do số lượng đơn nhiều. Nên các bạn vui lòng lên đơn đúng PHÂN LOẠI theo màu (hoặc size) mà các bạn chọn! Shop sẽ đóng hàng theo đúng PHÂN LOẠI trong đơn hàng!
                    - Đơn hàng trên 250k được hỗ trợ ship tối đa 35k
                    - Shop không tính phí vận chuyển, các bạn lên đơn, hệ thống trên shopee sẽ tự động tính phí vận chuyển ạ. 
                    - Khi các bạn lên đơn, shopee sẽ tính cho bạn ngày dự kiến nhận được hàng. Tùy theo từng khu vực mà shopee sẽ tính cho các bạn ngày nhận hàng dự kiến
                    
                    #nhinhishop #nhinhi #nhishop #aolen #ao #len #thudong #chanvay #ao #aothun #thun #giunhiet #aogiunhiet #cogian #daitay #giunhietnu #lotni #giuam #cocao #colotni #giunhietam #daitay #co3p #cocao3p`,
                    likes: 2300,
                    star: 4.5,
                    quan_sold: 91000,
                    quan_in_stock: 35856,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 47,
                },
                //22
                {
                    category_id: 3,
                    product_name: "Áo thun body cổ vuông dáng croptop, Áo kiểu dáng ôm sexxy cổ U AT6428 - NhiNhi Shop",
                    price: 59000,
                    description: `MÔ TẢ SẢN PHẨM
                    THÔNG TIN VỀ SẢN PHẨM
                    - Kích thước: Free Size (Tối đa 57kg- Tùy chiều cao)
                    - Chất liệu: Thun bozip co giãn
                    - Xuất xứ: NhiNhi Shop By Giainhinhi
                    - Chiều dài:
                    
                    CAM KẾT
                    - Cam kết ảnh chụp sản phẩm thật
                    - Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.
                    
                    LƯU Ý
                    - Do số lượng đơn nhiều. Nên các bạn vui lòng lên đơn đúng PHÂN LOẠI theo màu (hoặc size) mà các bạn chọn! Shop sẽ đóng hàng theo đúng PHÂN LOẠI trong đơn hàng!
                    
                    #giainhinhi #nhinhishop #nhinhi #nhishop #ao #aokieu #aothunkieu #aothun #aophong #dangrong #dangdai #rong #dai #cotron #ngantay #inchu #phongrong #sale #pololen #aolen #aopolo #cogian #sexxy #xuhuong #trending`,
                    likes: 2300,
                    star: 4.5,
                    quan_sold: 91000,
                    quan_in_stock: 35856,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 47,
                },
                //23
                {
                    category_id: 3,
                    product_name: "Áo thun nữ trơn cổ tim form dài dấu quần, Áo phông ngắn tay dáng rộng AT1128 - NhiNhiShop",
                    price: 89000,
                    description: `MÔ TẢ SẢN PHẨM
                    THÔNG TIN VỀ SẢN PHẨM
                    - Kích thước:  Free Size (Tối đa 70kg - Tùy chiều cao)
                    - Chất liệu: Thun trơn co giãn
                    - Xuất xứ: Việt Nam
                    - Chiều dài: Form rộng dáng dài
                    
                    NHINHISHOP CAM KẾT 
                    - Cam kết ảnh chụp sản phẩm thật
                    - Hàng lỗi do bên shop đổi trả trong vòng 03 ngày theo đúng quy định của shopee.
                    - Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.
                    
                    LƯU Ý
                    - Do số lượng đơn nhiều. Nên các bạn vui lòng lên đơn đúng PHÂN LOẠI theo màu (hoặc size) mà các bạn chọn! Shop sẽ đóng hàng theo đúng PHÂN LOẠI trong đơn hàng!
                    - Đơn hàng trên 250k được hỗ trợ ship tối đa 35k
                    - Shop không tính phí vận chuyển, các bạn lên đơn, hệ thống trên shopee sẽ tự động tính phí vận chuyển ạ. 
                    - Khi các bạn lên đơn, shopee sẽ tính cho bạn ngày dự kiến nhận được hàng. Tùy theo từng khu vực mà shopee sẽ tính cho các bạn ngày nhận hàng dự kiến
                    
                    #nhinhishop #nhinhi #nhishop #aolen #ao #len #thudong #chanvay #vay #quan #ao #bo #jean  #aothun #thun #phong #aophong #dauquan #cogian #ngantay #dangdai #cotim #formrong`,
                    likes: 2300,
                    star: 4.5,
                    quan_sold: 91000,
                    quan_in_stock: 35856,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 47,
                },
                //24
                {
                    category_id: 3,
                    product_name: "Rẻ Vô Địch Quần xuông cạp trơn đen , quần ống rộng trơn uzzlang",
                    price: 89000,
                    description: `MÔ TẢ SẢN PHẨM

                    ❄️Mã này hàng lên bao nhiêu vẫn không đủ cung cấp í 
                    ❄️Năm nay xưởng vẫn lên mẫu phục vụ mọi người nhé.
                    ❄️Chất liệu Cotton thoáng mát, form rộng freesize
                    ❄️Diện team, mặc đôi ưng xỉu đó ạ
                    ❄️Freesize: Phom dưới 60kg
                     mặc đẹp nha!
                    
                       ❄️❄️ Xưởng May BonBon – Chuyên sỉ lẻ các mẫu thời trang mới nhất
                    ️🏅Giá gốc tận xưởng không qua trung gian.
                    ️🏅Cập nhập mẫu HOT mới liên tục .
                    ️🏅Luôn tuyển sỉ CTV toàn quốc, sỉ số lượng lớn giá siêu siêu tốt .
                    ️🏅Sản phẩm luôn kèm ảnh tự chụp và Video tự quay .
                    📞 Add Z.a.l.o 0969136623 để cập nhập giá SỈ mới nhất  
                    🏚 : Yên định , Thanh Hoá
                    🌈 : Lựa chọn Xưởng MayBonBon để có một trải nghiệm mua hàng như ý các bạn nhé 😍😍 
                    🛑 LƯU Ý:
                    💖 Quý Khách vui lòng đọc kỹ Thông Tin Sản Phẩm trước khi đặt hàng, tránh đặt rồi hủy hàng nhé, hoặc có hủy thì hủy sớm trước khi đơn hàng đưa vận chuyển nhé. Vì sau khi đặt hàng, hàng sẽ được Shop gói và gửi đi liền trong ngày hoặc ngày hôm sau. Vì thế việc hủy hàng sẽ gây nhiều khó khăn cho Shop. Rất mong Quý Khách cảm thông và đắn đo giúp Shop!!!
                    : 💖 Theo quy định của Shopee Khách hàng sẽ KHÔNG ĐƯỢC XEM HÀNG trước khi thanh toán nhưng được đổi trả sau 24h nếu sản phẩm bị lỗi tính từ thời điểm nhận được hàng. Hãy chắc chắn nhận hàng và để thông tin chính xác khi ấn Mua hàng tránh trường hợp giao đi rồi lại quay về.
                    💖 Hướng dẫn đặt hàng nhiều sản phẩm một đơn : KH chọn màu + size - thêm vào giỏ hàng- chọn tiếp sản phẩm khác thêm vào giỏ, bước cuối KH mua đơn sẽ được đơn nhiều sản phẩm 
                    #ao #aophong #aophongnu #aophongloang #aobosua #aophongbosua #aothun #aothunnu #aothunloang #aorong #aothunrong #aotrummong #freeship #xuongmay #chuýeni #quancaro #quanke #quanongrong #quanongrong
                    #aounisex `,
                    likes: 2300,
                    star: 4.5,
                    quan_sold: 91000,
                    quan_in_stock: 35856,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 47,
                },
                // 25
                {
                    category_id: 3,
                    product_name: "Áo Thun AD Nam Nữ Form Rộng EDDIE BAUER Cotton Unisex 2 Màu Ulzzang ATV05",
                    price: 65000,
                    description: `MÔ TẢ SẢN PHẨM
                    MÔ TẢ SẢN PHẨM
                    THÔNG TIN SẢN PHẨM: 
                    Áo Thun Nam Nữ Unisex Tay Lỡ Form Rộng Đẹp Giá Rẻ Cổ Tròn Màu Đen / Áo Phông Nam Nữ Unisex
                    Chất liệu: thun cotton 100 co giãn dày dặn DÀY MỀM MỊN MÁT không xù lông. Form áo rộng chuẩn TAY LỠ UNISEX cực đẹp.
                    Sản phẩm freesize <65kg.
                    Dài áo 69 cm, ngang áo 55 cm tay dài 22 cm.
                    
                    Ngày này, áo thun tay lỡ Unisex form rộng đang ngày càng trở nên phổ biến và đa dạng với các mẫu thiết kế độc đáo bắt mắt, thậm chí còn bắt kịp nhiều trào lưu xu hướng đặc biệt là phong cách Hàn Quốc. 
                    Do đó, việc tìm hiểu tất tần tật về áo thun tay lỡ nam/nữ là cần thiết giúp bạn luôn cập nhật những mẫu thiết kế mới nhất. Điều này sẽ giúp bạn có nhiều sự lựa chọn mới mẻ và đa dạng phong cách thời trang của bạn.
                    
                    Vậy áo thun tay lỡ là gì?
                    - Là loại áo phông có chiều dài tay áo dài hơn so với áo thun nam ngắn tay, thường là dài đến khuỷu tay hoặc qua khuỷu tay. 
                    - Kiểu áo phông tay lỡ này thường xuất hiện ở những thiết kế áo thun unisex oversize rộng rãi, thoáng mát. 
                    - Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.
                    
                    Đặc điểm nổi bật của áo thun tay lỡ Unisex form rộng:
                    - Là item không thể thiếu trong tủ đồ vì sự thoải mái, dễ chịu, lại rất dễ phối đồ.
                    - Áo thun unisex thích hợp với cả nam và nữ. Mặc làm áo thun cặp, áo nhóm rất phù hợp.
                    - Áo thun form rộng dễ dàng phối đồ, thời trang phong cách Hàn Quốc.
                    
                    Khách hàng có thể an tâm khi mua hàng tại Legend - Thời trang Unisex:
                    + Cam kết về chất lượng sản phẩm, Shop cam kết cả về CHẤT LIỆU cũng như HÌNH ẢNH (đúng với những gì được nêu bật trong phần mô tả sản phẩm).
                    + Giá thành thấp nhất thị trường và được bảo hành theo quy định với từng sản phẩm, được đổi trả hàng lỗi trong vòng 7 ngày kể từ khi mua hàng.
                    ✔️ Thông tin cảnh báo: Không có
                    ✔️ Năm sản xuất: 2022
                    ✔️ Xuất xứ: Việt Nam
                    
                    ❤️  Tên cơ sở chịu trách nhiệm về hàng hoá: Legendary Official – Bùi Văn Tài
                    👉 Địa chỉ: 17 Khương Hạ, Khương Đình, Thanh Xuân, Hà Nội
                    
                    #áothun #áo_thun #aothun #ao_thun #áo_phông_nữ #aophongnu #ao_phong_nu #áophông #áo_phông
                    #aophong #ao_phong #áothunnam #áo_thun_nam #aothunnam #ao_thun_nam #áothunnữ #áo_thun_nữ #aothunnu
                    #ao_thun_nu #áothuntaylỡ #áo_thun_tay_lỡ #aothuntaylo #ao_thun_tay_lo #áophôngnam #áo_phông_nam 
                    #ao_phong_nam #áo_thun_unisex #aothununisex #ao_thun_unisex #áophôngtaylỡ #áo_phông_tay_lỡ #aophongtaylo
                    #ao_phong_tay_lo #áophôngrộng #áo_phông_rộng #aophongrong #ao_phong_rong #áo_thun_form_rộng #áophôngunisex#áo_phông_unisex#aophongunisex#ao_phong_unisex#áoformrộng#áo_form_rộng#aoformrong#ao_form_rong#áothunnam`,
                    likes: 2300,
                    star: 4.5,
                    quan_sold: 91000,
                    quan_in_stock: 35856,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 47,
                },
                //26
                {
                    category_id: 3,
                    product_name: "Áo phông Raglan form rộng chất vải tổ ong -Maylinh shop - Áo thun tay lỡ nam nữ đều mặc được",
                    price: 89000,
                    description: `MÔ TẢ SẢN PHẨM
                    Áo phông Raglan form rộng chất vải tổ ong -Maylinh shop - Áo thun tay lỡ nam nữ đều mặc được
                    
                    ⚜️ THÔNG TIN SẢN PHẨM
                    
                    - Chất liệu: Vải tổ ong, co dãn thoải mái, thoáng mát, thấm hút mồ hôi nam nữ đều mặc được 
                    
                    - Được thiết kế theo phong cách hàn quốc trẻ trung năng động thích hợp mặc hàng ngày, mặc đi chơi, đi dạo phố, form áo rộng rất dễ phối đồ mix với quần jean.
                    
                    
                    ⚜️ Bảng Size:
                    
                    Size M : 40-55 kg, cao 1m50 – 1m57, kích thước áo: rộng=49cm, dài=64cm
                    
                    Size L : 55- 65 kg, cao 1m58 – 1m70, kích thước áo: rộng=52cm, dài=68cm
                    
                    Size XL : 65 - 77 kg, cao 1m71 – 1m83, kích thước áo: rộng=56cm, dài=72cm
                    
                    ⚜️ HƯỚNG DẪN CÁCH ĐẶT HÀNG:
                    
                    - Cách đặt hàng: Nếu bạn muốn mua 2 sản phẩm khác nhau hoặc 2 size khác nhau, để được freeship
                    
                    - Bạn chọn từng sản phẩm rồi thêm vào giỏ hàng
                    
                    - Khi giỏ hàng đã có đầy đủ các sản phẩm cần mua, bạn mới tiến hành ấn nút “ Thanh toán”
                    
                    - Shop luôn sẵn sàng trả lời inbox để tư vấn.
                    
                    ⚜️ Quyền Lợi của Khách Hàng khi mua hàng shop tại shop:
                    
                    ✔ Nếu sản phẩm khách nhận được không đúng với sản phẩm khách đặt, hoặc không đúng với mô tả sản phẩm. Khách hàng đừng vội đánh giá 1⭐. Hãy inbox lại cho shop. Chúng tôi xin lắng nghe và giải quyết.
                    
                     Shop không hi vọng trường hợp này xảy ra, và sẽ cố gắng hết sức để bạn không có một trải nghiệm mua hàng không tốt tại shop. Nhưng nếu có shop sẽ giải quyết mọi chuyện sao cho thỏa đáng nhất.
                    
                    ✔ 10 khách hàng đánh giá 5s kèm kình ảnh ấn tượng nhất tháng sẽ được gửi kèm QUÀ TẶNG TO TO và MÃ GIẢM GIÁ trong lần mua hàng ở tháng kế tiếp.
                    
                    #ao #thun #tay #lo  #ao #phong #Form #rong #Chat #to #ong #thoang #mat #theu #chu #noi #ben #dep #MayLinhShop #MayLinhShop #aophongtaylo #aodoi #aothun #streetwear #aonam #aonu #aothundep #aophong #tshirt  #aothuntaylo #aothunlayer #aothununisex`,
                    likes: 2300,
                    star: 4.5,
                    quan_sold: 91000,
                    quan_in_stock: 35856,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 47,
                },
                //27
                {
                    category_id: 3,
                    product_name: "Áo Sơ Mi Chất Bò Cúc Cài Tay Lỡ Form Rộng Dáng Ngắn Nam Nữ",
                    price: 89000,
                    description: `MÔ TẢ SẢN PHẨM
                    Áo Sơ Mi Chất Bò Cúc Cài Tay Lỡ Form Rộng Dáng Ngắn Nam Nữ
                    
                    Form: Freesize, form rộng 40-75kg mặc oke
                    
                    Chất liêu: Bò
                    
                    Màu sắc: Đậm, Nhạt
                    `,
                    likes: 2300,
                    star: 4.5,
                    quan_sold: 91000,
                    quan_in_stock: 35856,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 47,
                },
                //28
                {
                    category_id: 3,
                    product_name: "Áo thun local brand love you 300k special , áo phông nam nữ form rộng , tee oversize unisex màu kem - gin store",
                    price: 89000,
                    description: `MÔ TẢ SẢN PHẨM

                    Áo thun local brand love you 300k special , áo phông nam nữ form rộng , tee oversize unisex màu kem - gin store
                    
                    ♻️HƯỚNG DẪN SỬ DỤNG VÀ BẢO QUẢN áo phông nam nữ form rộng ♻️
                    
                    Cách giặt: Nên giặt tay để giữ được fom dáng và zipper của quần áo. Lúc phơi cần lộn ngược quần, áo từ trong ra ngoài để tránh tình trạng bị bay màu, phai màu do ánh sáng mặt trời tiếp xúc trực tiếp vào áo và các hình in
                    
                    Bảo quản nơi khô ráo, nên treo lên móc, giá để không bị nhăn !
                    
                    Hỗ trợ đổi trả tee oversize unisex màu kem theo quy định của Shopee 
                    
                    1. Điều kiện áp dụng (trong vòng 07 ngày kể từ khi nhận sản phẩm) 
                    
                    - Hàng hoá vẫn còn mới, chưa qua sử dụng 
                    
                    - Hàng hoá bị lỗi hoặc hư hỏng do vận chuyển hoặc do nhà sản xuất 
                    
                    2. Trường hợp được chấp nhận:
                    
                    - Hàng không đúng size, kiểu dáng như quý khách đặt hàng 
                    
                    - Không đủ số lượng, không đủ bộ như trong đơn hàng 
                    
                    3. Trường hợp không đủ điều kiện áp dụng chính sách: 
                    
                    - Quá 07 ngày kể từ khi Quý khách nhận hàng 
                    
                    - Gửi lại hàng không đúng mẫu mã, không phải sản phẩm của GIN STORE. 
                    
                    - Không thích, không hợp, đặt nhầm mã, nhầm màu,... 
                    
                    *Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5% 
                    
                    ♥ Gin Store - Chuỗi cửa hàng bán vì đam mê chứ hông có lời 
                    
                    #áo_thun_local_brand #áo_local_brand #áo_phông_local_brand #áo_levents #áo #gin_store #áo_phông #Áo_thun #Áo_hãng #áo_thun_nữ #áo_local_brand_chính_hãng #Áo_logo #local_brand #Áo_levent #Áo_local #áo_3158 #áo_phông_logo #áo_phông_levents #hey_you_chính_hãng #áo_thun_nữ_local_brand #áo_from_chính_hãng #áo_phông_hey_you #special_price #Áo_thun_rẻ_mà_chất_lượng #á_local_brand #locar_brand #áo_from #áo_from_rộng_nữ_chính_hãng #Áo_phông_top_1 #áo_chính_hãng #áo_sale #Áo_Hãng_Levents #sadboiz #áo_phông_nữ #0đ_freeship #Loco_Brand_Chính_Hãng #Áo_phông_trắng #Áo_phông_chính_hãng #áo_loco_brand #locol_brand_chính_hãng #gin #áo_thn_nữ #áo_thun_Local #áo_hey_you #local_brand_áo_thun #loco_brand #áo_seconhand #áo_local_brand_giá_rẻ #áo_thun_local_brand_chính_hãng_levents #set_đồ_nữ #áo_thun_local_brand_chính_hãng #áo_local_brand_outerity #Áo_phông_màu_kem #áo_phong_có_logo #áo_logo_brand #Áo_Local_Outerity #OTS #áo_local_brand_love_you #áo_phong#áo_1k_freeship #áo_phông_logo_chính_hãng #thun_local #áo__local_brand #Áo_nữ #Áo_Thun_Local_Brand_8yo #áo_bigsize_nữ #levent #á_hãng #áo_from_rộng_nữ #sơ_mi #local_brand_chính_hãng #Áo_phông_1k #levents #áo_lô_cồ_chính_hãng #Áo_local_veden_1k #áo_thun_local_brand_love_you #áo_thu_trắng_localbrand_hot_2023 #Áo_Phông_Đỏ #Áo_Phông_3158 #áo_thun_300k #áo_thun_levent_love_you #nocturnal #áo_thun_trắng #áo_thun_chính_hãng #áo_phông_nữ_local_brand #áo_local_brand_nữ #áo_rots #áo_logo_chính_hãng #áo_phông_local #uncover #levents_chính_hãng #áo_nữ_local_brand #heyyou #outerity #áo_thun_levents #2hand #áo_chính_hãng_local_brand #hoodie_local_brand #áo_croptop #Đồ_1k_Free_Ship_Áo #áo_outerity #rots #gin_store_2 #phông_local_brand #8yo #áo_phong_local_brand #áo_thun_local_brand_levents #special_price_áo #Special_Price`,
                    likes: 2300,
                    star: 4.5,
                    quan_sold: 91000,
                    quan_in_stock: 35856,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 47,
                },
                //29
                {
                    category_id: 3,
                    product_name: "Tee basic ss1 CREWZ áo thun tay lỡ unisex Local Brand - AO_THUN_DVR (V427)",
                    price: 89000,
                    description: `MÔ TẢ SẢN PHẨM
                    👩 MÔ TẢ SẢN PHẨM 
                    
                    - Áo thun nam nữ oversize sử dụng chất vải cotton 65/35 co giãn 4 chiều. Là loại vải có đặc điểm mềm mịn, độ co giãn cao, khả năng thấm hút tốt và được dệt hoàn toàn từ sợi cây bông tự nhiên. Chất vải cotton cực kỳ thân thiện với làn da.
                    
                    - Áo thun nam nữ form rộng cổ tròn thoải mái
                    
                    - Áo phông unisex form rộng dễ phối đồ. Bạn có thể phối với quần jean, chân váy, … kết hợp với một đôi sneaker cho bạn tự tin xuống phố
                    
                    📣 HƯỚNG DẪN BẢO QUẢN ÁO PHÔNG NAM NỮ OVERSIZE VENDER Shop
                    
                    - Lộn trái áo thun nam nữ tay ngắn khi giặt, không giặt chung áo thun unisex trắng với quần áo tối màu. 
                    
                    - Sử dụng xà phòng trung tính, không sử dụng xà phòng có chất tẩy mạnh cho áo thun nam nữ oversize.
                    
                    - Không sử dụng chất tẩy, không ngâm áo phông unisex. 
                    
                    - Phơi ngang, không treo móc khi áo thun unisex ướt, không phơi trực tiếp dưới ánh nắng mặt trời. 
                    
                      🎯 Giao hàng đúng size, lỗi 1 đổi 1 
                    
                    ️🎯 Giao COD toàn quốc 
                    
                    ️🎯 Hỗ trợ đổi size và đổi màu trong vòng 7 ngày kể từ khi nhận hàng, sản phẩm đổi phải còn nguyên tem mac và chưa qua sử dụng.
                    
                    ⚠️ LƯU Ý: Khi mở sản phẩm, khách yêu vui lòng quay lại video quá trình mở sản phẩm để được đảm bảo 100% đổi lại sản phẩm mới nếu Áo thun VENDER giao bị lỗi.
                    
                    #ao #thun #phong #cotton #unisex #nam #nu #from #rong #tay #ngan 
                    
                    #aothun #aophong #fromrong #tayngan #aothuntaylo #aothunnamnu #aothununisex #aothunoversize #aothunformrong #aothunnuformrong #aotaylo #aothundep #vender #Streetwear`,
                    likes: 2300,
                    star: 4.5,
                    quan_sold: 91000,
                    quan_in_stock: 35856,
                    origin: "Việt Nam",
                    fromCity: "Hà Nội",
                    isMall: true,
                    discount: 47,
                },
                //30
                {
                    category_id: 3,
                    product_name: "Áo thun 3158 chất cotton khô thoáng mát, form rộng tay lỡ THE ONE freesize < 60kg",
                    price: 89000,
                    description: `MÔ TẢ SẢN PHẨM
                    Áo thun 3158 chất cotton khô thoáng mát, form rộng tay lỡ  THE ONE  freesize < 60kg
                    Áo thun nữ form rộng phù hợp với các bạn dưới 60kg trở xuống nhé
                    Chất cotton dày dặn  co giãn thoải mái vận động
                    Mix với các loại quần, chân váy rất đẹp
                    Form rộng , dài tay áo đến khoảng khuỷu tay
                    Phong cách Hàn cực trẻ trung, hiện đại
                    Mặc đi làm ,đi học, đi chơi bao đẹp, bao xinh ạ
                    
                    THÔNG TIN SẢN PHẨM
                    Chiều dài áo: 69-70cm
                    Rộng áo : 102cm
                    CHẤT LIỆU : COTTON KHÔ 3158
                    
                    Mẫu áo thun form rộng tay lỡ này là sản phẩm đặc biệt do nhà GEMS tự thiết kế từ form dáng, đường may, in ấn, đóng gói, tất cả đều được đảm bảo sản phẩm đến tay khách hàng được chỉn chu nhất, đẹp đẽ nhất nên các bạn yên tâm nha ! 
                    
                    
                    Lưu ý nhỏ : 
                    * Màu sắc vải sản phẩm có thể sẽ chênh lệch thực tế một phần nhỏ, do ảnh hưởng về độ lệch màu của ánh sáng nhưng vẫn đảm bảo chất lượng
                    * HƯỚNG DẪN SỬ DỤNG ÁO PHÔNG BASIC
                    - Nên giặt sản phẩm trước khi sử dụng. 
                    - Tốt nhất nên giặt tay và không nên chà mạnh bằng bàn chải có sợi cứng. 
                    - Nếu giặt máy, nên chọn chế độ giặt nhẹ và sản phẩm có chất vải phù hợp để bảo quản được lâu. 
                    - Không nên ngâm chung với trang phục ra bị màu. 
                    - Tránh phơi với ánh nắng trực tiếp. 
                    - Ủi (là) sản phẩm nếu cần và cài đặt nhiệt độ bàn ủi (là) phù hợp với từng loại vải.
                    -------------------------------
                    * GEM CAM KẾT: 
                    - Các sản phẩm nhà Gem luôn được bảo hành đầy đủ
                    - Tư vấn nhiệt tình, chu đáo luôn lắng nghe khách hàng để phục vụ tốt. 
                    - Giao hàng nhanh đúng tiến độ không phải để quý khách chờ đợi lâu để nhận hàng. 
                    -------------------------------
                    * Đổi trả theo đúng quy định của Shopee 
                    1. Điều kiện áp dụng (trong vòng 07 ngày kể từ khi nhận sản phẩm): 
                    - Hàng hoá vẫn còn mới, chưa qua sử dụng 
                    - Hàng hóa hư hỏng do vận chuyển hoặc do nhà sản xuất. 
                    2. Trường hợp được chấp nhận: 
                    - Hàng không đúng size, kiểu dáng như quý khách đặt hàng 
                    - Không đủ số lượng, không đủ bộ như trong đơn hàng
                    3. Trường hợp không đủ điều kiện áp dụng chính sách:
                     - Quá 07 ngày kể từ khi Quý khách nhận hàng 
                     - Gửi lại hàng không đúng mẫu mã, không phải hàng của GEM
                     - Đặt nhầm sản phẩm, chủng loại, không thích, không hợp,...
                    
                    #aophongnu#gem#aothunnuformrong#aothunnutayngan#aothunnutaylo#aothunbasic`,
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

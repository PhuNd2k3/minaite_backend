"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          category_id: 1,
          product_name: "ÁO THUN TRƠN ĐEN TRẮNG BASIC NAM NỮ CỔ TRÒN BAO MỊN",
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

        {
          category_id: 1,
          product_name: "ÁO THUN TRƠN ĐEN TRẮNG BASIC NAM NỮ CỔ TRÒN BAO MỊN",
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

        {
          category_id: 1,
          product_name: "ÁO THUN TRƠN ĐEN TRẮNG BASIC NAM NỮ CỔ TRÒN BAO MỊN",
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
          quan_in_stock: 35856 ,
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

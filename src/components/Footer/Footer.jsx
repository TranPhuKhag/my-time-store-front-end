import './Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="footer text-white">
        <div className="container">
          <div className="row text-center text-md-start">
            {/* Thông tin liên hệ */}
            <div className="col-md-3 col-12 mb-4">
              <h5 className="fw-bold mb-4">THÔNG TIN LIÊN HỆ</h5>
              <p>Công ty cổ phần OH!Decor</p>
              <p>
                <i className="bi bi-geo-alt"></i> Tầng 6, Tòa Ladeco, 266 Đội Cấn, Quận Ba Đình, TP Hà Nội
              </p>
              <p>
                <i className="bi bi-telephone"></i> Hotline: 1800.6750
              </p>
              <p>
                <i className="bi bi-envelope"></i> support@sapo.vn
              </p>
            </div>

            {/* Chăm sóc khách hàng */}
            <div className="col-md-3 col-12 mb-4">
              <h5 className="fw-bold mb-4">CHĂM SÓC KHÁCH HÀNG</h5>
              <p>Thời gian hỗ trợ 24/7 không kể ngày lễ</p>
              <p>Hotline: 1800.6750</p>
            </div>

            {/* Hướng dẫn */}
            <div className="col-md-3 col-12 mb-4">
              <h5 className="fw-bold mb-4">HƯỚNG DẪN</h5>
              <p>Chính sách mua bán</p>
              <p>Hế thông kiểm duyệt</p>
              <p>Chính sách bảo mật</p>
              <p>Quy định đổi trả/hoàn tiền</p>
              <p>Hướng dẫn mua hàng</p>
            </div>

            {/* Kết nối */}
            <div className="col-md-3 col-12 mb-4">
              <h5 className="fw-bold mb-4">KẾT NỐI</h5>
              <div className="social-icons mt-3 d-flex justify-content-center">
                <a href="#" className="text-white me-3">
                  <img src="src\assets\Image\Icon_of_Zalo.svg.png" alt="Zalo" style={{ width: '65px', height: '65px' }} />
                </a>
                <a href="#" className="text-white me-3">
                  <i className="bi bi-telephone-fill" style={{ fontSize: '50px' }}></i> {/* Biểu tượng điện thoại từ Bootstrap Icons */}
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="mb-0">© 2025 OH!Decor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
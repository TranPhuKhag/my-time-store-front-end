import './FeatureCollections.css'

const FeatureCollections = () => {
  return (
    <div>
      <div className="container mt-5 text-center">
        <h2 className="fw-bold collection-title">Bộ sưu tập</h2>
        <div className="d-flex justify-content-center align-items-center mt-3">
          <div className='btn-tittle'>
            <button className="btn me-2">Hiện đại</button>
            <button className="btn me-2">Cổ điển</button>
            <button className="btn me-2">Đơn giản</button>
            <button className="btn">Sang trọng</button>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="position-relative">
                <div className="sale-icon">Hot</div>
                <div className="product-discount">-10%</div>
                <img src="Image\OIP-2.jpg" className="card-img-top" alt="Sản phẩm 1" />
              </div>
              <div className="card-body">
                <div className='card-body-content'>
                  <h5 className="card-title">ĐÈN NGƯỜI ÔM BÓNG ĐÈN</h5>
                  <p className="product-price">15.000.000đ</p>
                </div>
                <button className="product-button">
                  Xem chi tiết <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="position-relative">
                <div className="sale-icon">New</div>
                <div className="product-discount">-10%</div>
                <img src="Image\OIP-2.jpg" className="card-img-top" alt="Sản phẩm 2" />
              </div>
              <div className="card-body">
                <div className='card-body-content'>
                  <h5 className="card-title">ĐÈN TRANG TRÍ LEFT HEAT</h5>
                  <p className="product-price">4.950.000đ <del>5.500.000đ</del></p>
                </div>
                <button className="product-button">
                  Xem chi tiết <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="position-relative">
                <div className="sale-icon">Sale</div>
                <div className="product-discount">-50%</div>
                <img src="Image\OIP-2.jpg" className="card-img-top" alt="Sản phẩm 3" />
              </div>
              <div className="card-body">
                <div className='card-body-content'>
                  <h5 className="card-title">GHẾ DA ARMCHAIR OAKWAY</h5>
                  <p className="product-price">6.190.000đ <del>12.380.000đ</del></p>
                </div>
                <button className="product-button">
                  Xem chi tiết <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="position-relative">
                <div className="sale-icon">Best</div>
                <div className="product-discount">-10%</div>
                <img src="Image\OIP-2.jpg" className="card-img-top" alt="Sản phẩm 4" />
              </div>
              <div className="card-body">
                <div className='card-body-content'>
                  <h5 className="card-title">ĐÈN CHÙM ROSEMAS PHA LÊ</h5>
                  <p className="product-price">33.050.000đ <del>36.530.000đ</del></p>
                </div>
                <button className="product-button">
                  Xem chi tiết <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCollections;
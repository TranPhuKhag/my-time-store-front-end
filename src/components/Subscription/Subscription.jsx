import React from 'react';
import './Subscription.css'; // Custom CSS for additional styling

const Subscription = () => {
    return (
        <div className="relative-container mt-5">
            <div className="subcription container rounded-4 p-4 shadow-sm d-flex flex-column flex-md-row align-items-center justify-content-center" style={{ maxWidth: '900px' }}>
                <div className="chair col-md-5 mb-3 mb-md-0">
                    <img src="//bizweb.dktcdn.net/100/501/740/themes/929449/assets/mailchimp.png?1736415638335" data-src="//bizweb.dktcdn.net/100/501/740/themes/929449/assets/mailchimp.png?1736415638335" />
                </div>

                {/* Content Section */}
                <div className="content col-md-7 text-center text-md-start">
                    <h2 className="fs-4 mb-3">Theo dõi và cập nhật tin tức mới nhất</h2>
                    <p className="fs-6 mb-4">
                        Khám phá những thiết kế đỉnh cao mang đến cảm giác thoải mái, sang trọng. Cân nhắc hòa trong từng sản phẩm phù hợp với mọi không gian sống.
                    </p>
                    <div className="input-group d-flex justify-content-center justify-content-md-start">
                        <input
                            type="email"
                            className="form-control rounded-start"
                            placeholder="Nhập email của bạn"
                            style={{ maxWidth: '200px', borderRadius: '10px' }}
                        />
                        <button className="btn btn-custom rounded-end">
                            Theo dõi →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;
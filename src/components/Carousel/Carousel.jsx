// Carousel.jsx
import './Carousel.css';

const Carousel = () => {
    return (
        <div>
            <section className="hero position-relative text-white py-5">
                {/* Video làm nền */}
                <video className="video-backdrop" autoPlay loop muted playsInline>
                    <source src="src\assets\video\v.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay màu tối */}
                <div className="backdrop"></div>

                {/* Nội dung chính */}
                <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between position-relative">
                    <div className="text-start col-lg-6">
                        <h1 className="display-4 fw-bold mb-3">
                            Đồng Hồ Cuckoo <br />
                            Cho Mọi Không Gian
                        </h1>
                        <p className="lead mb-4 w-75">
                            Bộ sưu tập đồng hồ cuckoo thủ công, kết hợp phong cách cổ điển và hiện đại cho ngôi nhà của bạn.
                        </p>
                        <a href="#" className="btn btn-light btn-lg decoration">
                           <i className="bi bi-cart" aria-hidden="true"></i> Mua Ngay
                        </a>
                    </div>
                    <div className="mt-4 mt-lg-0 d-flex justify-content-center">
                        <img
                            src="src\assets\Image\caroseul.jpg"
                            alt="Clock"
                            className="img-fluid custom-img"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Carousel;

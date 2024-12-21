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
                    <div className="text-start">
                        <h1 className="display-4 fw-bold mb-3">
                            Select Your New <br />
                            Perfect Style
                        </h1>
                        <p className="lead mb-4 w-75">
                            Discover our exclusive collection of handcrafted cuckoo clocks and accessories that redefine classic style with a modern touch.
                        </p>
                        <a href="#" className="btn btn-light btn-lg">
                            Shop Now
                        </a>
                    </div>
                    <div className="mt-4 mt-lg-0 d-flex justify-content-center">
                        <img
                            src="src/assets/Image/Nobackground.png"
                            alt="Watch"
                            className="img-fluid custom-img"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Carousel;

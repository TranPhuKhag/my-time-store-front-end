import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`header-section ${isScrolled ? "scrolled" : ""}`}>
            <nav id="navbar" className="navbar navbar-expand-lg">
                <div className="container">
                    <img src="src/assets/Image/logo-removebg-preview.png" alt="logo" />
                    <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item"><a className="nav-link" href="#">Trang Chủ</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Về Chúng Tôi</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sản Phẩm
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Sản Phẩm 1</a></li>
                                    <li><a className="dropdown-item" href="#">Sản Phẩm 2</a></li>
                                    <li><a className="dropdown-item" href="#">Sản Phẩm 3</a></li>
                                    <li><a className="dropdown-item" href="#">Sản Phẩm 4</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                        </ul>
                        <div className="d-flex align-items-center ms-3">
                            <div className="search-container">
                                <i className="bi bi-search"></i>
                                <input type="text" className="search-input" placeholder="Tìm kiếm sản phẩm..." />
                            </div>
                            <a href="#" className="text-white me-3"><i className="bi bi-person"></i></a>
                            <a href="#" className="text-white"><i className="bi bi-cart"></i></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;

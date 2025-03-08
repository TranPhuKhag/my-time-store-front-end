import React, { useState } from 'react';
import './NewArrival.css';
import { Link } from 'react-router-dom';

const NewArrival = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      title: 'SOFA',
      description: 'Ghế sofa vải và ghế dài',
      image: 'Image/OID-1.jpg',
    },
    {
      title: 'ĐÈN',
      description: 'Đèn trang trí nội thất',
      image: 'Image/OID-1.jpg',
    },
    {
      title: 'TỦ',
      description: 'Tủ phòng khách, phòng ngủ',
      image: 'Image/OIP-3.jpg',
    },
    {
      title: 'TỦ',
      description: 'Tủ phòng khách, phòng ngủ',
      image: 'Image/OIP-3.jpg',
    },
    {
      title: 'TỦ',
      description: 'Tủ phòng khách, phòng ngủ',
      image: 'Image/OIP-3.jpg',
    },
  ];

  const totalSlides = products.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="product-section">
      <div className="container">
        <div className="product-slider">
          <div className="title-section d-flex">
            <a href="" style={{ textDecoration: 'none' }}>
              <h4 className="section-title">Các dòng sản phẩm nổi bật</h4>
            </a>
            <div className="slider-controls">
              <button className="slider-btn prev" onClick={prevSlide}>
                <span className="text-dark">&lt;</span>
              </button>
              <button className="slider-btn next" onClick={nextSlide}>
                <span className="text-dark">&gt;</span>
              </button>
            </div>
          </div>

          <div className="product-list-wrapper">
            <div
              className="product-list d-flex gap-3"
              style={{ transform: `translateX(-${currentSlide * (300 + 20)}px)` }} // 300 là min-width, 20 là gap
            >
              {products.map((product, index) => (
                <div className="product-card d-flex flex-column flex-md-row" key={index}>
                  <div className="product-info d-flex flex-column justify-content-between p-3 bg-brown text-white">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <a href="#">Xem thêm →</a>
                  </div>
                  <div className="product-image d-flex justify-content-center align-items-center p-3">
                    <img src={product.image} alt={product.title} className="img-fluid" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
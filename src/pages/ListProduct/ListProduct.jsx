import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ListProduct.css';

const ListProduct = () => {
    // Dữ liệu tĩnh thay thế cho API
    const [products] = useState([
        {
            productId: 1,
            productName: 'Đồng Hồ Cuckoo Gỗ',
            price: 150.00,
            image: 'https://via.placeholder.com/150',
            isNew: true,
        },
        {
            productId: 2,
            productName: 'Đồng Hồ Cuckoo Hiện Đại',
            price: 200.00,
            image: 'https://via.placeholder.com/150',
            isNew: false,
        },
        {
            productId: 3,
            productName: 'Đồng Hồ Cuckoo Mini',
            price: 100.00,
            image: 'https://via.placeholder.com/150',
            isNew: true,
        },
        {
            productId: 4,
            productName: 'Đồng Hồ Cuckoo Cổ Điển',
            price: 250.00,
            image: 'https://via.placeholder.com/150',
            isNew: false,
        },
        {
            productId: 5,
            productName: 'Đồng Hồ Cuckoo Trang Trí',
            price: 180.00,
            image: 'https://via.placeholder.com/150',
            isNew: true,
        },
        {
            productId: 6,
            productName: 'Đồng Hồ Cuckoo Đơn Giản',
            price: 120.00,
            image: 'https://via.placeholder.com/150',
            isNew: false,
        },
    ]);

    const [page, setPage] = useState(1); // Giữ logic phân trang

    // Logic phân trang tĩnh (hiện tất cả sản phẩm trong ví dụ này)
    const itemsPerPage = 6; // Số sản phẩm trên mỗi trang
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const paginatedProducts = products.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return (
        <div>
            <main className="container my-5">
                {/* Filter Bar */}
                <div className="filter-bar mb-4">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-8 mb-2 mb-md-0">
                            <div className="sort-options d-flex flex-wrap justify-content-center justify-content-md-start">
                                <a href="#" className="me-3 active">All Items</a>
                                <a href="#" className="me-3">Price Low to High</a>
                                <a href="#" className="me-3">Most Popular</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Cards */}
                <div className="row g-4">
                    {paginatedProducts.map((product) => (
                        <div className="col-lg-4 col-md-6" key={product.productId}>
                            <div className="product-card">
                                <div className="image-wrapper">
                                    <Link to={`/product-detail/${product.productId}`}>
                                        <img
                                            src={product.image || 'https://via.placeholder.com/150'}
                                            alt={product.productName}
                                            className="img-fluid"
                                        />
                                    </Link>
                                    <div className="overlay">
                                        <button className="btn btn-light me-2">
                                            <i className="bi bi-cart-plus"></i>
                                        </button>
                                        <button className="btn btn-light">
                                            <i className="bi bi-heart"></i>
                                        </button>
                                    </div>
                                    {product.isNew && (
                                        <span className="badge bg-danger position-absolute top-0 start-0 m-3">New</span>
                                    )}
                                </div>
                                <div className="product-info p-3">
                                    <Link to={`/product-detail/${product.productId}`}>
                                        <h3 className="product-name">{product.productName}</h3>
                                    </Link>
                                    <p className="product-price">${product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <nav className="mt-5">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                            <button
                                className="page-link"
                                onClick={() => setPage(page - 1)}
                                disabled={page === 1}
                            >
                                <i className="bi bi-chevron-left"></i>
                            </button>
                        </li>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                            <li className={`page-item ${page === p ? 'active' : ''}`} key={p}>
                                <button className="page-link" onClick={() => setPage(p)}>
                                    {p}
                                </button>
                            </li>
                        ))}
                        <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
                            <button
                                className="page-link"
                                onClick={() => setPage(page + 1)}
                                disabled={page === totalPages}
                            >
                                <i className="bi bi-chevron-right"></i>
                            </button>
                        </li>
                    </ul>
                </nav>
            </main>
        </div>
    );
};

export default ListProduct;
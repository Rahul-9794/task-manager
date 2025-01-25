// Products.js
import React, { useState } from "react";
// import "./Products.css"; // External CSS

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const products = [
    { id: 1, name: "Laptop", image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/alienware-m18-mlk/media-gallery/hd/laptop-alienware-m18-r2-hd-perkey-intel-bk-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=522&qlt=100,1&resMode=sharp2&size=522,402&chrss=full" },
    { id: 2, name: "Smartphone", image: "https://m.media-amazon.com/images/I/31JDUhTPoLL._SY445_SX342_QL70_FMwebp_.jpg" },
    { id: 3, name: "Headphones", image: "https://m.media-amazon.com/images/I/41kIdIZD3xL._SX300_SY300_QL70_FMwebp_.jpg" },
    { id: 4, name: "Camera", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr4UGTMm-of2UwW4U4uXHEENgrt6vRmnhWtg&s" },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-page">
      <h1 className="text-4xl">Products</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="products-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

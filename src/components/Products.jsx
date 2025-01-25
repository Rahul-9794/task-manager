import React, { useState, useEffect } from 'react';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product">
          <span>{product.title}</span>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
import React from 'react';

function Cart() {
  const cartItems = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
  ];

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <button>Remove</button>
        </div>
      ))}
      <h3>Total: $100</h3>
    </div>
  );
}

export default Cart;
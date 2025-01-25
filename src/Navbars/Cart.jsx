import React, { useState } from "react";
// import "./Cards.css"; // External CSS for styling

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 1000,
      description: "High-performance laptop for all your needs.",
      image: "https://eartec.com/wp-content/uploads/2020/08/VideographerHEADSETSpg-1024x843.jpg",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 500,
      description: "Stay connected with the latest smartphone.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTvjwepDDCZfdu6mY1zq-wX1BipULAQJ7VtA&s",
    },
    {
      id: 3,
      name: "Headphones",
      price: 200,
      description: "Immerse yourself in high-quality sound.",
      image: "https://eartec.com/wp-content/uploads/2020/08/VideographerHEADSETSpg-1024x843.jpg",
    },
  ];
  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(setCart)
    setTotal(total + product.price);
  };

  const removeFromCart = (index) => {
    const itemToRemove = cart[index];
    setCart(cart.filter((_, i) => i !== index));
    setTotal(total - itemToRemove.price);
  };

  return (
    <div className="app">
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Beautiful Shopping Cart</h1>
      <div className="cards-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{product.name}</h3>
              <p className="card-description">{product.description}</p>
              <p className="card-price">Price: ₹{product.price}</p>
              <button className="card-button" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2 style={{ textAlign: "center", marginTop: "40px" }}>Your Cart</h2>
        {cart.length > 0 ? (
          <div>
            {cart.map((item, index) => (
              <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <p>
                  {item.name} - ₹{item.price}
                </p>
                <button onClick={() => removeFromCart(index)} style={{ backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}>
                  Remove
                </button>
              </div>
            ))}
            <h3>Total: ₹{total}</h3>
          </div>
        ) : (
          <p style={{ textAlign: "center" }}>Your cart is empty!</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
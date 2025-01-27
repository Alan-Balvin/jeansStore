import { useState, useEffect } from "react";

import "./App.css";

const jeans = [
  {
    id: 1,
    name: "Casual Jeans",
    price: 150.54,
    image: "https://barbellapparel.com/cdn/shop/products/barbell-slim-athletic-fit-jeans-front-cement_1800x1800.webp?v=1647893712",
  },
  {
    id: 2,
    name: "Modern Jeans",
    price: 200.34,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj_7-xd1lNllYuHhPjFoK6E_EJ4NqeDyV5YA&s",
  },
  {
    id: 3,
    name: "Mexican Jeans",
    price: 89.9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRTJ90USMO65yNrazTQRXXBxN00qscOHDd0w&s",
  },
  {
    id: 4,
    name: "Sinaloa Jeans",
    price: 130.72,
    image:
      "https://http2.mlstatic.com/D_NQ_699530-MLM80154766396_112024-V.webp",
  },
];

export default function JeansStore() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addJeans = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeJeans = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const handlePurchase = () => {
    alert(`Thank you for your purchase! Total: $${totalPrice.toFixed(2)}`);
  };

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  }, [cart]);

  return (
    <>
      <div className="app">
        <header className="header">
          <h1>Jeans Store</h1>
        </header>

        <div className="main">
          <section className="products">
            <h2>Catalog:</h2>
            <div className="product-list">
              {jeans.map((jean) => (
                <div className="product-card" key={jean.id}>
                  <img
                    src={jean.image}
                    alt={jean.name}
                    className="product-image"
                  />
                  <h3>{jean.name}</h3>
                  <p>
                    <b>Price: $</b> {jean.price.toFixed(2)}
                  </p>
                  <button
                    onClick={() => addJeans(jean)}
                    className="add-to-cart"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </section>
          <section className="cart">
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul className="cart-list">
                {cart.map((item, index) => (
                  <li key={index} className="cart-item">
                    {item.name} - ${item.price.toFixed(2)}
                    <button
                      className="remove-item"
                      onClick={() => removeJeans(index)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            {cart.length > 0 && (
              <button onClick={handlePurchase} className="pay-now">
                Checkout
              </button>
            )}
          </section>
        </div>
      </div>
    </>
  );
}

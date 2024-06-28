import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

const ContextCart = () => {
  const { cart, removeFromCart, clearCart } = useContext(ProductContext);

  return (
    <div className="container mx-auto p-4">
      <h1 className='text-center text-2xl font-bold mb-4'>Cart</h1>
      {cart.length === 0 ? (
        <p className='text-center'>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="product-card p-4 m-2 border rounded">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>₦{product.price}</p>
              <button className="bg-red-500 p-2 text-white rounded" onClick={() => removeFromCart(product.id)}>
                Remove
              </button>
            </div>
          ))}
          <button className="bg-green-500 p-2 text-white rounded" onClick={clearCart}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default ContextCart;

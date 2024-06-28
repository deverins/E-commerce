import React, { createContext, useState } from 'react';
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addProduct = (product) => { 
    setProducts([...products, product]);
  };

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    };

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  const clearCart = () => {
    setCart([]); 
  };

  return (
    <>
      <ProductContext.Provider value={{ products, addProduct, cart, addToCart, removeFromCart, clearCart }}>
        {children}
      </ProductContext.Provider>
    </>
  );
};

export default ProductProvider;

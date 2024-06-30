import React, { createContext, useState } from 'react';
export const ProductContext = createContext();

// what this children param represent is to make the the nested components have access to the context 
const ProductProvider = ({ children }) => {
  // i initialize a state variables for managaging products and cart
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
 

  const addProduct = (product) => {
    // setProducts is being called and the spreading the existing product to join the new product. then the setproducts now  update the initial state to the new products list
    setProducts([...products, product]);
  };

  const addToCart = (product) => {
    // what does the function do?
    // it's use to add products to shopping cart

    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
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

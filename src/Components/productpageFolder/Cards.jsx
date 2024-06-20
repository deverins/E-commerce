// src/components/ProductPage/Cards.js
import React from 'react';
import useStore from '../../store/store';
import { Link } from 'react-router-dom';

const Cards = () => {
  const products = useStore(state => state.products);
  const addToCart = useStore(state => state.addToCart);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap">
        {products.map(product => (
          <div key={product.id} className="product-card p-4 border rounded m-2">
            <h3 className="text-xl font-berkshire">{product.name}</h3>
            <p className="text-base">{product.description}</p>
            <p className="text-lg">${product.price}</p>
            <Link to={`/check-out-product/${product.id}`}>
            <button 
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" 
              onClick={() => addToCart(product)}
            >
               Check
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

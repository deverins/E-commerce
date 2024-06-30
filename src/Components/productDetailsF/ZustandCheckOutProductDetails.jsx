import React, { useEffect, useState } from 'react';
import useStore from '../../zustandstore/store';
import ProductDetails from './ProductDetails';
import { useNavigate, useParams } from 'react-router-dom';

const ZustandCheckOutProductDetails = () => {
  const products = useStore(state => state.products);
  const [product, setProduct] = useState();
  const navigate = useNavigate()
  const addToCart = useStore(state => state.addToCart);

  const AddToCart=()=>{
    addToCart(product)
    navigate('/zustand/zustand-add-to-cart')
  }

  const {id} = useParams();

  useEffect(()=>{
    if(!id) return
    const details = products.find(data=>data.id === id);
    if(!details) return;
    setProduct(details);
  }, [id, products])

  return (
    <div className='flex items-center justify-center'>
      <div className='w-full max-w-2xl p-8 rounded-lg shadow'>
        <h1 className='text-2xl text-center font-bold mb-6 '>Check Product Details</h1>
        {product ?
          (<ProductDetails product={product} addToCart={AddToCart} />) :
          (<p className='text-gray-600'>Loading product details...</p>)
        }
      </div>
    </div>
  );
};

export default ZustandCheckOutProductDetails;

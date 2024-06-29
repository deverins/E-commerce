import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import { setProductDetails } from '../../redux/actions/productActions';
import { addToCart } from '../../redux/actions/cartActions';

const ReduxCheckOutProductDetails = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.product.productDetails);
  const products = useSelector(state => state.product.products);
  const navigate = useNavigate()

  const AddToCart=()=>{
    dispatch(addToCart(product))
    navigate('/redux/redux-add-to-cart')
    }
      useEffect(()=>{
        if(!id) return
        const product = products.find(data=>data.id === id);
        if(!product) return;
        dispatch(setProductDetails(product));
      }, [id, products, dispatch])

  return (
    <>
      <marquee className='text-center text-2xl font-bold' behavior="slow" direction="right">
        <h2>
          Welcome to our Store
        </h2>
      </marquee>
    <div className='flex items-center justify-center'>
      <div className='w-full max-w-2xl p-8 rounded-lg shadow'>
        <h1 className='text-2xl text-center font-bold mb-6 '>Check Product Details</h1>
        {product ?
          (<ProductDetails product={product} addToCart={AddToCart} />) :
          (<p className='text-gray-600'>Loading product details...</p>)
        }
      </div>
    </div>
    </>
  );
};

export default ReduxCheckOutProductDetails;

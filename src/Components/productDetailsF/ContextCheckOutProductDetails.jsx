import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import { ProductContext } from '../../context/ProductContext';

const ContextCheckOutProductDetails = () => {
  const {id} = useParams();
  const { products, addToCart } = useContext(ProductContext);
  const product = products.find((product) => product.id === id);
  const navigate = useNavigate()

  const AddToCart=()=>{
    addToCart(product)
    navigate('/context/context-add-to-cart')
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='w-full max-w-2xl p-8 rounded-lg shadow'>
        <h1 className='text-2xl text-center font-bold mb-6 '>Check Product Details</h1>
        {product ?
          (<ProductDetails product={product}  addToCart={AddToCart} />) :
          (<p className='text-gray-600'>Loading product details...</p>)
        }
      </div>
    </div>
  );
};

export default ContextCheckOutProductDetails;

import React from 'react';
import { Card } from 'reactstrap';

const ProductDetails = ({product, addToCart}) => {

  return (
    <Card className='bg-white p-6 rounded-lg '>
      <div className='w-full'>
        <div className="h-64 bg-gray-700 rounded-xl mb-6"></div>
        <p className='text-lg font-semibold text-gray-700 mb-2'>Name: <span className='font-normal'>{product.name}</span></p>
        <p className='text-lg font-semibold text-gray-700 mb-2'>Description: <span className='font-normal'>{product.description}</span></p>
        <p className='text-lg font-semibold text-gray-700 mb-4'>Price: <span className='font-normal'>₦{product.price}</span></p>
      </div>
        <button
        className='w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-md transition duration-300'
        onClick={addToCart}
        >
          Add to Cart
        </button>
    </Card>
  );
};

export default ProductDetails;

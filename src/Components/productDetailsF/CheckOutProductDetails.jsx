import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStore from '../../store/store';
import { setProductDetails } from '../../redux/action';
import { Card } from 'reactstrap';
import { Link } from 'react-router-dom';

const CheckOutProductDetails = () => {
  const view = useStore(state => state.view);
  const addToCart = useStore(state => state.addToCart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (view) {
      dispatch(setProductDetails(view));
    }
  }, [view, dispatch]);

  const productDetails = useSelector(state => state.product.productDetails);

  return (
    <div className='flex items-center justify-center'>
      <div className='w-full max-w-2xl p-8 rounded-lg shadow'>
        <h1 className='text-2xl text-center font-bold mb-6 '>Check Product Details</h1>
        {productDetails ? (
          <Card className='bg-white p-6 rounded-lg '>
            <div className='w-full'>
              <div className="h-64 bg-gray-700 rounded-xl mb-6"></div>
              <p className='text-lg font-semibold text-gray-700 mb-2'>Name: <span className='font-normal'>{productDetails.name}</span></p>
              <p className='text-lg font-semibold text-gray-700 mb-2'>Description: <span className='font-normal'>{productDetails.description}</span></p>
              <p className='text-lg font-semibold text-gray-700 mb-4'>Price: <span className='font-normal'>₦{productDetails.price}</span></p>
            </div>
            <Link to={'/add-to-cart'}>
              <button
                className='w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-md transition duration-300'
                onClick={() => addToCart(productDetails)}
              >
                Add to Cart
              </button>
            </Link>
          </Card>
        ) : (
          <p className='text-gray-600'>Loading product details...</p>
        )}
      </div>
    </div>
  );
};

export default CheckOutProductDetails;

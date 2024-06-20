// src/components/CheckOutProductDetails.js
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
      console.log('Fetched Product Details:', view);
      dispatch(setProductDetails(view));
    }
  }, [view, dispatch]);

  const productDetails = useSelector(state => state.product.productDetails);

  console.log('Product details in component:', productDetails);

  return (
    <div className='w-full flex justify-center'>
      <div>
        <h1>Check Product Details</h1>
        {productDetails ? (
          <Card>
            <div>
              <p>Name: {productDetails.name}</p>
              <p>Description: {productDetails.description}</p>
              <p>Price: {productDetails.price}</p>
            </div>
            <Link to={'/add-to-cart'}>
              <button
                className='bg-blue-400 p-4 rounded-md text-white'
                onClick={() => addToCart(productDetails)}
              >
                Add to Cart
              </button>
            </Link>
          </Card>
        ) : (
          <p>Loading product details...</p>
        )}
      </div>
    </div>
  );
};

export default CheckOutProductDetails;

// src/components/CheckProductDetails.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductDetails } from '../../redux/action';

const CheckOutProductDetails = () => {
  const productDetails = useSelector((state) => state.product.productDetails);
  const dispatch = useDispatch();

  const fetchProductDetails = () => {
    const details = { id: 1, name: 'Sample Product', price: 100 };
    dispatch(setProductDetails(details));
  };

  return (
    <div>
      <h1>Check Product Details</h1>
      <button onClick={fetchProductDetails}>Fetch Product Details</button>
      <div>
        <p>ID: {productDetails.id}</p>
        <p>Name: {productDetails.name}</p>
        <p>Price: {productDetails.price}</p>
      </div>
    </div>
  );
};

export default CheckOutProductDetails;

import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './Components/Layout';
import Homepage from './Components/productpageFolder/Homepage';
import CreateProduct from './Components/CreateProduct';
import './index.css';
import Cart from './Components/addToCart/Cart';
import CheckOutProductDetails from './Components/productDetailsF/CheckOutProductDetails';

const App = () => {


  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className=''>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path={'/create'} element={<CreateProduct />} />
            <Route path={'/add-to-cart'} element={<Cart />} />
            <Route path={'/check-out-product/:id'} element={<CheckOutProductDetails />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;

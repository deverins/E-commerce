import React, { useEffect } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './Components/Layout';
import Homepage from './Components/productpageFolder/Homepage';
import ZustandCreateProduct from './Components/CreateProduct/ZustandCreateProduct';
import ReduxCreateProduct from './Components/CreateProduct/ReduxCreateProduct';
import ContextCreateProduct from './Components/CreateProduct/ContextCreateProduct';
import './index.css';
import ZustandProductDetails from './Components/productDetailsF/ZustandCheckOutProductDetails';
import ReduxProductDetails from './Components/productDetailsF/ReduxCheckOutProductDetails';
import ContextProductDetails from './Components/productDetailsF/ContextCheckOutProductDetails';
import ZustandCart from './Components/addToCart/ZustandCart';
import ReduxCart from './Components/addToCart/ReduxCart';
import ProductProvider from './context/ProductContext';
import ZustandCard from './Components/productpageFolder/ZustandCard';
import ReduxCard from './Components/productpageFolder/ReduxCard';
import ContextCard from './Components/productpageFolder/ContextCard';
import ContextCart from './Components/addToCart/ContextCart';


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
      <ProductProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/zustand"  element={<Outlet />} >
              <Route path="product"  element={<ZustandCard />} />
              <Route path="create"  element={<ZustandCreateProduct />} />
              <Route path="zustand-add-to-cart"  element={<ZustandCart />} />
              <Route path="check-out-product/:id"  element={<ZustandProductDetails />} />
            </Route>
            <Route path="/redux"  element={<Outlet />} >
              <Route path="product"  element={ <ReduxCard /> } />
              <Route path="create"  element={<ReduxCreateProduct />} />
              <Route path="redux-add-to-cart"  element={<ReduxCart />} />
              <Route path="check-out-product/:id"  element={<ReduxProductDetails />} />
            </Route>
              <Route path="/context"  element={<Outlet />} >
                <Route path="product"  element={ <ContextCard /> } />
                <Route path="create"  element={<ContextCreateProduct />} />
                <Route path="context-add-to-cart"  element={<ContextCart />} />
                <Route path="check-out-product/:id"  element={<ContextProductDetails />} />
              </Route>
          </Route>
        </Routes>
      </ProductProvider>
      </div>
    </>
  );
};

export default App;

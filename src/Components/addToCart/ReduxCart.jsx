import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../redux/actions/cartActions';
import { Card, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const ReduxCart = () => {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div className='container mx-auto p-4'>
      {cart.length === 0 ? (
        <div className='flex flex-col mt-20'>
          <div className='justify-center flex flex-col mx-auto w-[50%] items-center'>
            <p>Your cart is empty.</p>
            <Link to={'/'}>
              <button className='bg-blue-500 mt-4 text-sm text-white p-2 rounded'>
                START SHOPPING
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h1 className='text-2xl font-bold mb-4'>Your Cart</h1>
          {cart.map(product => (
            <Card key={product.id} className="product-card p-4 border rounded mb-4">
              <div className='flex justify-between'>
                <div>
                  <h3 className="text-xl font-berkshire">{product.name}</h3>
                  <p className="text-base">{product.description}</p>
                  <p className="text-lg">₦{product.price}</p>
                </div>
                <Button
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  Remove
                </Button>
              </div>
            </Card>
          ))}
          <Button
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
            onClick={() => dispatch(clearCart())}
          >
            Checkout
          </Button>
        </>
      )}
    </div>
  );
};

export default ReduxCart;

import React from 'react';
import useStore from '../../store/store';
import { Card, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useStore(state => state.cart);
  const removeFromCart = useStore(state => state.removeFromCart);
  const clearCart = useStore(state => state.clearCart);

  return (
    <div className='container mx-auto p-4'>
      {cart.length === 0 ? (
        <div className=' flex flex-col mt-20'>
          <div className=' justify-center flex flex-col mx-auto w-[50%] items-center'>
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
          <h1>Cart</h1>
          {cart.map(product => (
            <div key={product.id}>
              <Card className="product-card p-4 border rounded m-2">
                <h3 className="text-xl font-berkshire">{product.name}</h3>
                <p className="text-base">{product.description}</p>
                <p className="text-lg">${product.price}</p>
                <Button
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </Button>
              </Card>

            </div>
          ))}
          <Button
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
            onClick={clearCart}
          >
            Checkout
          </Button>
        </>
      )}
    </div>
  );
};

export default Cart;

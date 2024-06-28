import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const ContextCard = () => {
  const { products } = useContext(ProductContext);
  return (
    <>
      <div className="container ">
        <marquee className='text-center text-2xl font-bold mb-8' behavior="slow" direction="right">
          <h2>
            Welcome to our Store
          </h2>
        </marquee>
        {products.length === 0 ? (
          <p className='text-center'>No products available</p>
        ) : (
          <div className="container mx-auto p-4">
            <CardBody className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map(product => (
                <Card key={product.id} className="product-card p-4 border rounded">
                  <div className="h-48 bg-gray-700 rounded-xl mb-4"></div>
                  <div>
                    <h3 className="text-xl font-bold">{product.name}</h3>
                  </div>
                  <div className=''>
                    <p className=' break-words'>{product.description}</p>
                  </div>
                  <p className="text-lg font-semibold text-red-600">₦{product.price}</p>
                  <Link to={`/context/check-out-product/${product.id}`}>
                    <button className="mt-2 px-4 py-2 bg-[#3730A3] text-white rounded">
                      View Product
                    </button>
                  </Link>
                </Card>
              ))}
            </CardBody>
          </div>
        )}
      </div>
    </>
  )
}

export default ContextCard
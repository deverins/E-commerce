import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';

const ReduxCard = () => {
  const products = useSelector(state => state.product.products);

  return (
    <>
            <div className="container mx-auto p-4">
                <CardBody className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map(product => (
                        <Card key={product.id} className="product-card p-4 border rounded">
                            <div className="h-48 bg-gray-700 rounded-xl mb-4"></div>
                            <h3 className="text-xl font-bold">{product.name}</h3>
                            <p>{product.description}</p>
                            <p className="text-lg font-semibold text-red-600">₦{product.price}</p>
                            <Link to={`/redux/check-out-product/${product.id}`}>
                                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                                    View Product
                                </button>
                            </Link>
                        </Card>
                    ))}
                </CardBody>
            </div>
        </>
  )
}

export default ReduxCard
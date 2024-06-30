import React from 'react';
import useStore from '../../zustandstore/store';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';

const Cards = () => {
    const products = useStore(state => state.products);
    const viewProduct = useStore(state => state.viewProduct);

    return (
        <div className="container mx-auto p-4">
            <CardBody className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {products.map(product => (
                    <Card key={product.id} className="product-card w-full h-auto p-3 bg-gray-50 flex flex-col gap-1 rounded-2xl m-2">
                        <div className="h-48 bg-gray-700 rounded-xl"></div>
                        <div className='flex flex-row justify-between px-3 mt-5 mb-5'>
                            <span className="text-xl text-black font-berkshire">{product.name}</span>
                            <p className="font-bold text-red-600">₦{product.price}</p>
                        </div>
                        <Link to={`/check-out-product/${product.id}`}>
                            <button
                                className="hover:bg-blue-700 w-full p-4 text-gray-50 bg-blue-800 py-2 rounded-md"
                                onClick={() => viewProduct(product)}
                            >
                                View product
                            </button>
                        </Link>
                    </Card>
                ))}
            </CardBody>
        </div>
    );
};

export default Cards;

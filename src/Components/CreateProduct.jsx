// src/components/CreateProduct/Create.js
import React, { useState } from 'react';
import useStore from '../store/store';

const CreateProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const addProduct = useStore(state => state.addProduct);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Date.now(),
            name,
            description,
            price: parseFloat(price)
        };
        addProduct(newProduct);
        setName('');
        setDescription('');
        setPrice('');
    };

    return (
        <div className='max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12'>
            <h2 className='text-2xl font-bold text-white mb-6'>Create Product</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label className="block text-sm font-medium text-gray-300" htmlFor="name">
                        Product Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Product Name" required
                        className='mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white'
                    />
                </div>
                <div className='mb-4'>
                    <label className="block text-sm font-medium text-gray-300" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Product Description"
                        className='mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white'
                    />
                </div>
                <div className='mb-4'>
                    <label className="block text-sm font-medium text-gray-300" htmlFor="product price">
                        Product Price
                    </label>
                    <input type="number"
                        value={price} onChange={(e) => setPrice(e.target.value)}
                        placeholder="Product Price"
                        required
                        className='mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white'
                    />
                </div>
                <div className='flex justify-end'>

                    <button type="submit"
                        className='bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80'
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateProduct;

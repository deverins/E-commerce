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
        <div>
            <h2>Create Product</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" required />
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Product Description" required />
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Product Price" required />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default CreateProduct;

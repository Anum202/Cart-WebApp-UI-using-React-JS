import React, { useState } from 'react';

import Navbar from '../Dashboard/Navbar/Navbar';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

import './Order.css';

const Order = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [selectedList, setSelectedList] = useState('');
    const [selectedCart, setSelectedCart] = useState('');

    const addItem = () => {
        if (newItem.trim()) {
            setItems([...items, { name: newItem, quantity: 1 }]);
            setNewItem('');
        }
    };

    const updateQuantity = (index, change) => {
        const updatedItems = items.map((item, i) =>
            i === index ? { ...item, quantity: item.quantity + change } : item
        ).filter(item => item.quantity > 0);
        setItems(updatedItems);
    };

    const deleteItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    return (
        <div className="container">
            <Navbar title="Order" />
            <div className="body">
                <Sidebar />
                <div className="main">
                    <div className="enter-list-section">
                        <div className="section-header">
                            <div className="section-title">Enter the List</div>
                            <button className="new-list-button" onClick={addItem}>New List</button>
                        </div>
                        <div className="options">
                            <label><input type="radio" name="list" value="Instacart" checked={selectedList === 'Instacart'} onChange={(e) => setSelectedList(e.target.value)} /> Instacart</label>
                            <label><input type="radio" name="list" value="Amazon Fresh" checked={selectedList === 'Amazon Fresh'} onChange={(e) => setSelectedList(e.target.value)} /> Amazon Fresh</label>
                            <label><input type="radio" name="list" value="Walmart Grocery" checked={selectedList === 'Walmart Grocery'} onChange={(e) => setSelectedList(e.target.value)} /> Walmart Grocery</label>
                        </div>
                        <div>Enter Here</div>
                        <textarea className="enter-here" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="Select"></textarea>
                    </div>

                    <div className='right-container'>
                        <div className="unified-cart-section">
                            <div className="section-header">
                                <div className="section-title">Unified Cart View</div>
                            </div>
                            <div className="options">
                                <label><input type="radio" name="cart" value="Instacart" checked={selectedCart === 'Instacart'} onChange={(e) => setSelectedCart(e.target.value)} /> Instacart</label>
                                <label><input type="radio" name="cart" value="Amazon Fresh" checked={selectedCart === 'Amazon Fresh'} onChange={(e) => setSelectedCart(e.target.value)} /> Amazon Fresh</label>
                                <label><input type="radio" name="cart" value="Walmart Grocery" checked={selectedCart === 'Walmart Grocery'} onChange={(e) => setSelectedCart(e.target.value)} /> Walmart Grocery</label>
                            </div>
                        </div>
                        <div className="processed-items-section">
                            <div className="section-header">
                                <div className="section-title">Processed Items</div>
                            </div>
                            <div className="processed-items">
                                {items.map((item, index) => (
                                    <div className="item" key={index}>
                                        <div className="item-name">{item.name}</div>
                                        <div className="item-quantity">
                                            <button onClick={() => updateQuantity(index, -1)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(index, 1)}>+</button>
                                        </div>
                                        <button className="delete-item" onClick={() => deleteItem(index)}>🗑️</button>
                                    </div>
                                ))}
                            </div>
                            <button className="push-to-cart">Push to Instacart Cart</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Order;

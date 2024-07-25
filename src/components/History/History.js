import React from 'react';

import Navbar from '../Dashboard/Navbar/Navbar';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

import searchIcon from '../../assets/search.png';

import './History.css';

const History = () => {
    const pageTitle = 'History';
    const cardsData = [
        {
            store: 'Instacart',
            dateOrder: '12-05-2023',
            totalItems: '45'
        },
        {
            store: 'Amazon',
            dateOrder: '15-06-2023',
            totalItems: '30'
        },
        {
            store: 'Walmart',
            dateOrder: '18-07-2023',
            totalItems: '25'
        },
        {
            store: 'Instacart',
            dateOrder: '12-05-2023',
            totalItems: '45'
        },
        {
            store: 'Amazon',
            dateOrder: '15-06-2023',
            totalItems: '30'
        },
        {
            store: 'Walmart',
            dateOrder: '18-07-2023',
            totalItems: '25'
        },
        {
            store: 'Instacart',
            dateOrder: '12-05-2023',
            totalItems: '45'
        },
        {
            store: 'Amazon',
            dateOrder: '15-06-2023',
            totalItems: '30'
        },
        {
            store: 'Walmart',
            dateOrder: '18-07-2023',
            totalItems: '25'
        },
    ];

    return (
        <div className="o-container">
            <Navbar title={pageTitle} />
            <div className="b-content">
                <Sidebar />
                <div className="m-content">
                    <div className="full-width-header">
                        <span className="date">Date</span>
                        <input type="date" className="date-picker" />
                        <div className="search-bar-container">
                            <img src={searchIcon} alt="Search" className="search-icon" />
                            <input type="text" className="search-bar" placeholder="Search" />
                        </div>
                        <button className="new-order-button">+ New Order</button>
                    </div>

                    <div className='card-wrapper'>
                        <div className="history-orders">
                            {cardsData.map((card, index) => (
                                <div className="order-card" key={index}>
                                    <div className="order-info">
                                        <span className="order-info-title">Delivery Store</span>
                                        <span className="order-info-value">{card.store}</span>
                                    </div>
                                    <div className="order-info">
                                        <span className="order-info-title">Date Order</span>
                                        <span className="order-info-value">{card.dateOrder}</span>
                                    </div>
                                    <div className="order-info">
                                        <span className="order-info-title">Total Items</span>
                                        <span className="order-info-value">{card.totalItems}</span>
                                    </div>
                                    <div className='btn-container'>
                                        <button className="view-items-button1">View Items</button>
                                        <button className="view-items-button2">View Items</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default History;


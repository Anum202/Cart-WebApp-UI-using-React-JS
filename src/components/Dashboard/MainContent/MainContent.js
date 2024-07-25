import React from 'react';

import './MainContent.css';

const MainContent = () => {
    return (
        <div className="mainContent">
            <div className="stats-section">
                <div className="stat-item">
                    <h3>Total Expenses</h3>
                    <div className="stat-value">
                        <span>$3,536</span>
                        <div className="stat-percentage blue">32.4%</div>
                    </div>
                </div>
                <div className="stat-item">
                    <h3>Total Orders</h3>
                    <div className="stat-value">
                        <span>3,536</span>
                        <div className="stat-percentage orange">32.4%</div>
                    </div>
                </div>
                <div className="stat-item">
                    <h3>Cancelled Orders</h3>
                    <div className="stat-value">
                        <span>3,536</span>
                        <div className="stat-percentage red">32.4%</div>
                    </div>
                </div>
                <div className="stat-item">
                    <h3>Total Product Ordered</h3>
                    <div className="stat-value">
                        <span>3,536</span>
                        <div className="stat-percentage green">32.4%</div>
                    </div>
                </div>
            </div>

            <div className="chart-section">
                <h3>Categories Performance</h3>
                <div className="chart-placeholder">[Chart]</div>
            </div>

            <div className="budget-section">
                <h3>Save Your Budget</h3>
                <div className="budget-items">
                    <div className="budget-item">
                        <span>Groceries</span>
                        <input type="text" />
                    </div>
                    <div className="budget-item">
                        <span>House Items</span>
                        <input type="text" />
                    </div>
                    <div className="budget-item">
                        <span>Health and Personal Care</span>
                        <input type="text" />
                    </div>
                    <div className="budget-item">
                        <span>Snacks & Beverages</span>
                        <input type="text" />
                    </div>
                    <div className="budget-item">
                        <span>Fruit & Vegetables</span>
                        <input type="text" />
                    </div>
                    <div className="budget-item">
                        <span>Dairy Products</span>
                        <input type="text" />
                    </div>
                    <div className="budget-item">
                        <span>Meat & Sea Food</span>
                        <input type="text" />
                    </div>
                    <div className="budget-item">
                        <span>Bakery and Bread Budget</span>
                        <input type="text" />
                    </div>
                </div>
                <div className="budget-buttons">
                    <button className="save-button">Save Budget</button>
                    <button className="reset-button">Reset</button>
                </div>
            </div>
        </div>
    );
};

export default MainContent;

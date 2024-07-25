import React from 'react';

import Navbar from '../Dashboard/Navbar/Navbar';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

import './Subscription.css';

import masterCardIcon from '../../assets/master-card.png';
import visaCardIcon from '../../assets/visa-card.png';

const Subscription = () => {
    const pageTitle = 'Subscription';

    return (
        <div className="outer-container">
            <Navbar title={pageTitle} />
            <div className="body-content">
                <Sidebar />
                <div className="mainContent">
                    <h2 className="section-title">Plan</h2>
                    <div className="plan-container">
                        <div className="plan-card basic-plan">
                            <h3>Basic</h3>
                            <p>$10/month</p>
                            <p>26 Days Remaining</p>
                            <button className="action-button">Cancel Subscription</button>
                        </div>
                        <div className="plan-card premium-plan">
                            <h3>Premium</h3>
                            <p>$99/month</p>
                            <p>26 Days Remaining</p>
                            <button className="action-button">Upgrade Now</button>
                            <button className="learn-more">Learn more about this</button>
                        </div>
                    </div>
                    <h2 className="section-title">Enable Auto Renew</h2>
                    <div className="auto-renew-container">
                        <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <h2 className="section-title">Payment Method</h2>
                    <div className="payment-method-container">
                        <div className="card">
                            <img src={masterCardIcon} alt="MasterCard" />
                            <p>**** **** **** 345</p>
                            <button className="remove-card">Remove Card</button>
                        </div>
                        <div className="card">
                            <img src={visaCardIcon} alt="Visa" />
                            <p>**** **** **** 622</p>
                            <button className="remove-card">Remove Card</button>
                        </div>
                        <div className="add-card">
                            <button className="add-card-button">+</button>
                        </div>
                    </div>
                    <h2 className="section-title">Billing History</h2>
                    <div className="billing-history-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Details</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Download</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Beginner Plan Monthly</td>
                                    <td>08/04/2024</td>
                                    <td>$10.00</td>
                                    <td><a href="/">Invoice 8-Apr-24</a></td>
                                </tr>
                                <tr>
                                    <td>Beginner Plan Monthly</td>
                                    <td>08/04/2024</td>
                                    <td>$10.00</td>
                                    <td><a href="/">Invoice 8-Apr-24</a></td>
                                </tr>
                                <tr>
                                    <td>Beginner Plan Monthly</td>
                                    <td>08/04/2024</td>
                                    <td>$10.00</td>
                                    <td><a href="/">Invoice 8-Apr-24</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;

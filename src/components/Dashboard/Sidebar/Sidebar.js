import React from "react";
import { Link } from 'react-router-dom';

import dashboard from '../../../assets/home.png';
import order from '../../../assets/note.png';
import history from '../../../assets/timer.png';
import ideas from '../../../assets/AI.png';
import subscription from '../../../assets/forward-item.png';
import faq from '../../../assets/message-question.png';
import manage from '../../../assets/setting.png';

import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar-nav">
                <Link to="/dashboard" className="sidebar-link">
                    <img src={dashboard} alt="Dashboard" />
                    <span>Dashboard</span>
                </Link>
                <Link to="/order" className="sidebar-link">
                    <img src={order} alt="Order" />
                    <span>Order</span>
                </Link>
                <Link to="/history" className="sidebar-link">
                    <img src={history} alt="History" />
                    <span>History</span>
                </Link>
                <Link to="/ideas" className="sidebar-link">
                    <img src={ideas} alt="Generate Ideas" />
                    <span>Generate Ideas</span>
                </Link>
                <Link to="/subscription" className="sidebar-link">
                    <img src={subscription} alt="Subscription" />
                    <span>Subscription</span>
                </Link>
                <Link to="/faq" className="sidebar-link">
                    <img src={faq} alt="FAQ's" />
                    <span>FAQ's</span>
                </Link>
                <Link to="/manage" className="sidebar-link">
                    <img src={manage} alt="Manage" />
                    <span>Manage</span>
                </Link>
            </nav>
        </div>
    )
}
export default Sidebar;


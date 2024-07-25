import React from 'react';

import Navbar from '../Dashboard/Navbar/Navbar';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

import './Manage.css';

const Manage = () => {
    const pageTitle = 'Manage';
    return (
        <div className="outer-container">
            <Navbar title={pageTitle} />
            <div className="body-content">
                <Sidebar />
            </div>
        </div>
    )
}
export default Manage;

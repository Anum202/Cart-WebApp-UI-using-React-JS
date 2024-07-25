import React from 'react';

import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import MainContent from './MainContent/MainContent';

import './Dashboard.css';

function Dashboard() {
    const pageTitle = 'Dashboard';
    return (
        <div className="dashboard">
            <Navbar title={pageTitle} />
            <div className="dashboard-body">
                <Sidebar />
                <MainContent />
            </div>
        </div>
    );
}

export default Dashboard;

import React from 'react';

import logo from '../../../assets/logo.png';
import profile from '../../../assets/profile.png';
import msg_question from '../../../assets/message-question.png';
import arrow from '../../../assets/arrow-down.png';

import './Navbar.css';

const Navbar = ({ title }) => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className='span-text'>
                <span>{title}</span>
            </div>
            <div className="user-profile">
                <a href="/messages">
                    <img src={msg_question} alt="Message" />
                </a>
                <a href="/profile">
                    <img src={profile} alt="User" />
                </a>
                <span>John</span>
                <a href="/settings">
                    <img src={arrow} alt="Arrow-down" />
                </a>
            </div>
        </div>
    );
}

export default Navbar;

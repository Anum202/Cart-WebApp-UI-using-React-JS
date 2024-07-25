import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../../components/GlobalStyles.css';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/Preferences')
    }

    return (
        <div className='outerContainer'>
            <div className='left-container'></div>
            <div className='rightContainer'>
                <div className='header-text'>
                    Already an account? <Link to='/SignIn'>Log In</Link>
                </div>

                <div className='inner-container'>
                    <div className='heading-text'>Let's register your account</div>

                    <form onSubmit={handleSubmit}>
                        <div className='inputs'>
                            <div className='placeholder'>
                                <label>Name</label>
                            </div>
                            <div className='input'>
                                <input type='text' placeholder='Name Here' />
                            </div>
                            <div className='placeholder'>
                                <label>Email</label>
                            </div>
                            <div className='input'>
                                <input type='email' placeholder='Email Here' />
                            </div>
                            <div className='placeholder'>
                                <label>Password</label>
                            </div>
                            <div className='input'>
                                <input type='password' placeholder='Password Here' />
                            </div>
                            <div className='placeholder'>
                                <label>Confirm Password</label>
                            </div>
                            <div className='input'>
                                <input type='password' placeholder='Password Here' />
                            </div>
                            <div className='checkbox'>
                                <input type='checkbox' id='terms' />
                                <label>Accept Terms and Conditions</label>
                            </div>
                            <div className='submit-btn'>
                                <button type='submit'>Create an account</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register;
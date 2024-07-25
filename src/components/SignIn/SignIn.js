import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import '../../components/GlobalStyles.css';
import './SignIn.css';

const SignIn = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/Dashboard')
    }

    return (
        
            <div className='outerContainer'>
            <div className='left-container'></div>
            <div className='rightContainer'>
                <div className='header-text'>
                    Don't have an account? <Link to='/Register'>Sign Up</Link>
                </div>

                <div className='inner-container'>
                    <div className='heading-text'>Sign In</div>
                    <div className='summary-text'>Let's sign in to your account</div>

                    <form onSubmit={handleSubmit}>
                        <div className='inputs'>
                            <div className='placeholder'>
                                <label>Email</label>
                            </div>
                            <div className='input'>
                                <input type='email' placeholder='Write Here' />
                            </div>
                            <div className='placeholder'>
                                <label>Password</label>
                            </div>
                            <div className='input'>
                                <input type='password' placeholder='Write Here' />
                            </div>
                            <div className='forget'>
                                <a href='./forget'>Forgot Password?</a>
                            </div>
                            <div className='submit-btn'>
                                <button type='submit'>Let's Go</button>
                            </div>
                            <div className='underline'></div>
                        </div>

                        <div className='footer'>
                            Protected by reCAPTCHA and subject to the Prism <span className='span-link'>Privacy Policy</span> and <span className='span-link'>Terms of Service.</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      
        
    )
}
export default SignIn;




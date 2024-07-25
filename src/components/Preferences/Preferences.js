import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../../components/GlobalStyles.css';
import './Preferences.css';

const Preferences = () => {

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/Store');
    }

    return (
        <div className='outerContainer'>
            <div className='left-container'></div>
            <div className='rightContainer'>

                <div className='inner-container'>
                    <div className='heading-text'>Set your preferences</div>

                    <form onSubmit={handleSubmit}>
                        <div className='inputs'>
                            <div className='placeholder'>
                                <label>Default Delivery Service</label>
                            </div>
                            <div className='input'>
                                <select id='default-service' name='default-service'>
                                    <option value='' disabled selected>Select</option>
                                    <option value='instacart'>Default Service 1</option>
                                    <option value='amazon-fresh' >Default Service 2</option>
                                    <option value='walmart-grocery'>Default Service 3</option>
                                </select>
                            </div>
                            <div className='placeholder'>
                                <label>Other Delivery Stores</label>
                            </div>
                            <div className='checkbox'>
                                <input type='checkbox' id='cb1' />
                                <label htmlFor='cb1'>Instacart</label>
                            </div>
                            <div className='checkbox'>
                                <input type='checkbox' id='cb2' />
                                <label htmlFor='cb2'>Amazon Fresh</label>
                            </div>
                            <div className='checkbox'>
                                <input type='checkbox' id='cb2' />
                                <label htmlFor='cb2'>Walmart Grocery</label>
                            </div>
                            <div className='switch'>
                                <label htmlFor='monitoring-switch'>
                                    Enable Clipboard Monitoring and Background Processing
                                    <input type='checkbox' id='monitoring-switch' />
                                    <span className='slider'></span>
                                </label>
                            </div>
                            <div className='submit-btn'>
                                <button type='submit'>Let's Go</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Preferences;
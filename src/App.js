import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Preferences from './components/Preferences/Preferences.js';
import Store from './components/Store/Store.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Order from './components/Order/Order.js';
import History from './components/History/History.js';
import FAQ from './components/FAQs/FAQ.js';
import Subscription from './components/Subscription/Subscription.js';
import Ideas from './components/GenerateIdeas/Ideas.js';
import Manage from './components/Manage/Manage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/Register' element={<Register />} />
        <Route path='SignIn' element={<SignIn />} />
        <Route path='Preferences' element={<Preferences />} />
        <Route path='/Store' element={<Store />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Order' element={<Order />} />
        <Route path='/History' element={<History />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/Subscription' element={<Subscription />} />
        <Route path='/Ideas' element={<Ideas />} />
        <Route path='/Manage' element={<Manage />} />
      </Routes>
    </Router>
  );
}

export default App;

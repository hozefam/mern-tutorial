import 'react-toastify/dist/ReactToastify.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Login from './pages/Login';
import React from 'react';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

import React from 'react'
import './App.css';
import './global.css';
import { Home, Login } from './pages';
import { Header, Sidebar } from './template';
import Agent from './pages/agent/Agent';
import AddAgent from './pages/agent/AddAgent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Customer from './pages/customer/Customer';
import AddCustomer from './pages/customer/AddCustomer';

function App() {

  return (
    <div className='main-container'>
      <div className='sidebar-container'><Sidebar /></div>
      <div className='content-container'>
        {/* <Header />
        <Home /> */}
        <AddAgent />
        <Agent/>
        <AddCustomer />
        <Customer />
      </div>
      <ToastContainer />
    </div>
  )
}

export default App

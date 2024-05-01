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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomerFiles from './pages/customer/CustomerFiles';
import CustomerCheques from './pages/customer/CustomerCheques';
import Mentor from './pages/mentor/Mentor';

function App() {

  return (
    <div className='main-container'>
      <div className='sidebar-container'><Sidebar /></div>
      <div className='content-container'>

        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/addagent' element={<AddAgent/>} />
            <Route path='/agentlist' element={<Agent/>} />
            <Route path='/addcustomer' element={<AddCustomer/>} />
            <Route path='/customerlist' element={<Customer/>} />
            <Route path='/customerfiles' element={<CustomerFiles/>} />
            <Route path='/customercheques' element={<CustomerCheques/>} />
            <Route path='/mentor' element={<Mentor/>} />
          </Routes>
        </BrowserRouter>
        {/* <Header />
        <Home /> */}
        {/* <AddAgent />
        <Agent/>
        <AddCustomer />
        <Customer /> */}
      </div>
      <ToastContainer />
    </div>
  )
}

export default App

import React, {useState} from 'react'
import './App.css';
import './global.css';
import { Home, Login, PageNotFound } from './pages';
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
import Mentor from './pages/customer/Mentor';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className='main-container'>
      
      <div className='content-container'>

        <BrowserRouter>
          <Header isLoggedIn={isLoggedIn} />
          <div className='sidebar-container'>{isLoggedIn && <Sidebar />}</div>
          {isLoggedIn ? 
          <Routes>

            
            <Route path='/addagent' element={<AddAgent/>} />
            <Route path='/agentlist' element={<Agent/>} />
            <Route path='/addcustomer' element={<AddCustomer/>} />
            <Route path='/customerlist' element={<Customer/>} />
            <Route path='/customerfiles' element={<CustomerFiles/>} />
            <Route path='/customercheques' element={<CustomerCheques/>} />
            <Route path='/mentor' element={<Mentor/>} />
            <Route path='/' element={<Home/>} />
            <Route path="*" element={<PageNotFound isLoggedIn={isLoggedIn} />} />
         
          </Routes>
          :
          <Routes>

          <Route path='/login' element={<Home/>} />
          <Route exact path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<PageNotFound isLoggedIn={isLoggedIn} />} />
       
        </Routes>
}    
        </BrowserRouter>
       
      </div>
      <ToastContainer />
    </div>
  )
}

export default App

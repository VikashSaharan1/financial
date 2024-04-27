import React from 'react'
import './App.css';
import './global.css';
import { Home, Login } from './pages';
import { Header, Sidebar } from './template';

function App() {

  return (
    <div className='main-container'>
      <div className='sidebar-container'><Sidebar /></div>
      <div className='content-container'>
        <Header />
        <Home />
      </div>
    </div>
  )
}

export default App

import React from 'react'
import "./Header.css";

const Header = ({isLoggedIn}) => {
  return (
    <div className='header-main-container'>
      <div className='h-m-c-inner'>
        <div className='left-side-content'>
          <span>
            <svg width="24" height="24">
              <rect x="10" y="10" width="100%" height="100%" fill="#2ea7ff" />
            </svg>
          </span>
          Home
        </div>
        <div className='right-side-content'>
          <div className='r-s-c-inner'>
            <span>Quick Links <i class="fa-solid fa-caret-down"></i></span>
            <span><i class="fa-regular fa-bell"></i><i></i></span>
            <span><i class="fa-solid fa-power-off"></i></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
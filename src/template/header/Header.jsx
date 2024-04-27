import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <div className='header-main-container'>
      <div className='h-m-c-inner'>
        <div className='left-side-content'>
          <span>
            <svg width="24" height="24">
              <rect x="10" y="10" width="100%" height="100%" fill="blue" />
            </svg>
          </span>
          Home
        </div>
        <div className='right-side-content'></div>
      </div>
    </div>
  )
}

export default Header
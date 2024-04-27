import React from 'react'
import './SidebarPV.css';
import defaultImg from '../../assets/images/Default_pfp.svg.png'

const SidebarPV = () => {
  return (
    <div className='sidebar-pv-main-container'>
      <div className='profile-icon'><img src={defaultImg} alt='profile-icon'/></div>
      <div className='profile-name-text'>
        <div>Hi Randeep</div>
        <div>View My Info</div>
      </div>
      <div className='setting-icon'><i class="fa-solid fa-gear"></i></div>
    </div>
  )
}

export default SidebarPV
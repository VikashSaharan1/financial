import React from 'react'
import './Sidebar.css';
import { SidebarPV } from '../../components';
import SidebarElem from "./SidebarElem.json";

const Sidebar = () => {
  return (
    <div className='sidebar-main-container'>
      <div className='s-m-c-inner'>
        <div className='logo-in-sidebar'><h3>LoGo</h3></div>
        <div className='profile-view-in-sidebar'><SidebarPV /></div>
        <div className='sidebar-elements'>
          {
            SidebarElem.map((elem, index) => {
              return (
                <div key={index}>
                  <div>
                    <i className={elem.icon}></i>
                  </div>
                  <span>{elem.name}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar
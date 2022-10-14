import React from 'react'
import { Outlet } from 'react-router-dom'
import Adminnavbar from '../components/Adminnavbar/Adminnavbar'
import Asidenav from '../components/Asidenav/Asidenav'

import "./ADashboard.css"

const ADashboard = () => {
  return (
    <div className='ADashboard'>
 
 <div className='Asidenav'>
 <Asidenav />
 </div>

 
    
    <div className='outlet'>
    <div className="adminnav">
        <Adminnavbar />
    </div>
   
           <Outlet />
    </div>
  
    </div>
  )
}

export default ADashboard
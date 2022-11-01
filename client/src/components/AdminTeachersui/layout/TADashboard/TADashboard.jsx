import React from 'react'
import { Outlet } from 'react-router-dom'
import TAdminnavbar from '../../components/TAdminnavbar/TAdminnavbar'

import "./TADashboard.css"
import TAsidenav from './../../components/TAsidenav/TAsidenav';

const TADashboard = () => {
  return (
    <div className='TADashboard'>
 
 <div className='Asidenav '>
 <TAsidenav />
 </div>

 
    
    <div className='outlet'>
    <div className="adminnav">
        <TAdminnavbar />
    </div>
   
           <Outlet />
    </div>
  
    </div>
  )
}

export default TADashboard
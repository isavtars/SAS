import React from 'react';

import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import { useSelector } from "react-redux";

import Userdetails from './components/Admin/Userdetails';       
import AdminLogin2 from './components/Admin/AdminLogin2/AdminLogin2';
import ADashboard from './components/Admin/ADashboard/ADashboard';
import ADhome from './components/Admin/ADhome/ADhome';
import Students from "./components/Admin/page/Students/Students"
import AddStudents from './components/Admin/page/AddStudents/AddStudents';
// shall we enable editsusers  import Edit from './components/Edit';

function App() {

  
  const admin = useSelector((state) => state.user.currentUser);
  console.log(admin)

  return (
    <>
      <Router>
       
        <Routes>

          <Route path='/' element={<Home/>}></Route>
          <Route path='/services' element={<Services/>}> </Route>
    

        


        
        {/* //admin dashboards */}
          <Route path="/adminlogin" element={admin  ? <Navigate to="/admin" replace /> :  <AdminLogin2 />}  ></Route>
        <Route path="/admin" element={admin==null ? <Navigate to="/adminlogin" replace /> :  <ADashboard />}  ></Route>
          


         {
          admin==null&&(
            <Route path="/adminlogin" element={<AdminLogin2 />}  ></Route>
          )
         }
          {
            admin &&(
            
          <Route path='/admin'  element={<ADashboard />}>
          <Route index  element={<ADhome />} />
            <Route path='teachers' element={<Userdetails/>} />
            <Route path='students' element={<Students />} />
            <Route path='students/add' element={<AddStudents />} />
          
           </Route>
           
  

    
            )

          } 
          



        </Routes>
      </Router>

    </>
  );
}

export default App;

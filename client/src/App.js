import React from 'react';

import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import { useSelector } from "react-redux";

      
import AdminLogin2 from './components/Admin/AdminLogin2/AdminLogin2';
import ADashboard from './components/Admin/ADashboard/ADashboard';
import ADhome from './components/Admin/ADhome/ADhome';
import Students from "./components/Admin/page/Students/Students"
import AddStudents from './components/Admin/page/AddStudents/AddStudents';

import Teachers from "./components/Admin/page/Teachers/Teachers"
import EditTeacher from './components/Admin/page/EditTeacher/EditTeacher';
import AddTeachers from './components/Admin/page/AddTeachers/AddTeachers';
import Home404 from './components/pages/Home404';
import Teacherlogin from './components/AdminTeachersui/Teacherlogin/Teacherlogin';

function App() {

  
  // const admin = useSelector((state) => state.user.currentUser);
      
  const admin = useSelector((state) => state.user.currentUser);
     console.log(admin)
 


  return (
    <>
      <Router>
       
        <Routes>

          <Route path='/' element={<Home/>}></Route>
           <Route path='*' element={<Home404/>}></Route>
          <Route path='/services' element={<Services/>}> </Route>
    

        


        
        {/* //admin dashboards */}
          <Route path="/adminlogin" element={admin  ? <Navigate to="/admin" replace /> :  <AdminLogin2 />}  ></Route>
        <Route path="/admin" element={admin==null ? <Navigate to="/adminlogin" replace /> :  <ADashboard />}  ></Route>
          


         {
          admin==null &&(
            <Route path="/adminlogin" element={<AdminLogin2 />}  ></Route>
          )
         }
          {
            admin &&(
              
            
          <Route path='/admin'  element={<ADashboard />}>
          <Route index  element={<ADhome />} />
            <Route path='teachers' element={<Teachers/>} />
              <Route path='editteachers/:id' element={<EditTeacher/>} />
               <Route path='addteacher' element={<AddTeachers />} />



            <Route path='students' element={<Students />} />
            <Route path='students/add' element={<AddStudents />} />
          
           </Route>
           
  

    
            )

          } 

          {/* uiRouters fro teachers */}

          <Route path="/teacherlogin" element={<Teacherlogin />}></Route>
          



        </Routes>
      </Router>

    </>
  );
}

export default App;

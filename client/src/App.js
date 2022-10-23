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
import Teacherlogin from './components/AdminTeachersui/page/Teacherlogin/Teacherlogin';
import TADashboard from './components/AdminTeachersui/layout/TADashboard/TADashboard';
import TADhome from './components/AdminTeachersui/layout/TADhome/TADhome';
import Passwordreset from './components/AdminTeachersui/page/Passwordreset/Passwordreset';
import TAStudents from './components/AdminTeachersui/page/TAStudents/TAStudents';
import ForgetPassreset from './components/AdminTeachersui/page/ForgetPassreset/ForgetPassreset';
import Attendence from './components/AdminTeachersui/page/Attendence/Attendence';
import AllatendenceReport from './components/AdminTeachersui/page/AllatendenceReport/AllatendenceReport';

function App() {

  
      
  const admin = useSelector((state) => state.user.currentUser);
     console.log(admin)

      
  const tadmin = useSelector((state) => state.teacher.currentUser);
     console.log(tadmin)
 
 


  return (
    <>
 {/* //admin dashboards */}


   {
    
    admin ?
      <Router>      
        <Routes>
          <Route path='/' element={<Home/>}></Route>
           <Route path='*' element={<Home404/>}></Route>
          <Route path='/services' element={<Services/>}> </Route>
      <Route path="/teacherlogin" element={<Teacherlogin />}></Route>
    <Route path="/password-reset" element={<Passwordreset />}></Route>
  
       

        <Route path="/adminlogin" element={admin  ? <Navigate to="/admin" replace /> :  <AdminLogin2 />}  ></Route>

        
        <Route path="/teacherlogin" element={tadmin  ? <Navigate to="/tadmin" replace /> :  <Teacherlogin />}  ></Route>
            
        

        {
          
        admin &&(
                   
          <Route path='/admin'  element={<ADashboard />}>
          <Route index  element={<ADhome />} />

            <Route path='teachers' element={<Teachers/>} />
              <Route path='editteachers/:id' element={<EditTeacher/>} />
               <Route path='addteacher' element={<AddTeachers />} />

            <Route path='students' element={<Students />} />
            <Route path='addstudents' element={<AddStudents />} />  
           </Route>    
        )      
        }
          
        </Routes>
      </Router>
      :
       <Router>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
           <Route path='*' element={<Home404/>}></Route>
          <Route path='/services' element={<Services/>}> </Route>
     <Route path="/password-reset" element={<Passwordreset />}></Route>
      <Route path="/forget-passwordreset/:id/:token" element={<ForgetPassreset />}></Route>

     
          <Route path="/adminlogin" element={<AdminLogin2 />}></Route>
            <Route path="/teacherlogin" element={<Teacherlogin />}></Route>
    <Route path="/admin" element={!admin  ? <Navigate to="/adminlogin" replace /> :  <ADashboard />}  ></Route>




        
            <Route path="/tadmin" element={!tadmin  ? <Navigate to="/teacherlogin" replace /> :  <TADashboard />}  ></Route>

            
        <Route path="/teacherlogin" element={tadmin  ? <Navigate to="/tadmin" replace /> :  <Teacherlogin />}  ></Route> 
         
         {
          tadmin &&(
             <Route path='/tadmin'  element={<TADashboard />}>
          <Route index  element={<TADhome />} />
          <Route path="students"  element={<TAStudents />} />
           <Route path="attendence"  element={<Attendence />} />
            <Route path="allattendence"  element={<AllatendenceReport  />} />
         
         
         
           
           </Route>   
          )
         }

     
       </Routes>
       </Router>
      
      
    
   }


    {/* //forteacheracoouroutecontroller */}

    {/* {
      tadmin ? 
      <Router>
        <Routes>



        <Route path="/teacherlogin" element={tadmin  ? <Navigate to="/tadmin" replace /> :  <Teacherlogin />}  ></Route>
         
        <Route path='/tadmin'  element={<TADashboard />}>
          <Route index  element={<TADhome />} />
           
           </Route>   
           

        </Routes>
      </Router>
      :
      <Router>
        <Routes>


       

          <Route path="/adminlogin" element={<AdminLogin2 />}></Route>
            <Route path="/teacherlogin" element={<Teacherlogin />}></Route>

            <Route path="/tadmin" element={!tadmin  ? <Navigate to="/teacherlogin" replace /> :  <TADashboard />}  ></Route>
          
        </Routes>
      </Router>
    
    } */}
    </>

  );
}

export default App;

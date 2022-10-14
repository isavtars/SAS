import "./style/LoginUi.css"
import profile from "./../images/a.png";
import email from "./../images/email.jpg";
import pass from "./../images/pass.png";
import name from "./../images/name.png";
import phone from "./../images/phone.png";
import React,{useState,useEffect} from 'react';
import {Link,useNavigate,useParams } from "react-router-dom";

import api from "../service/api"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginUi = () => {
 const navigate=useNavigate();
const {id}=useParams();
const idx=id.toString()


 const [user,setuser]=useState({})



 useEffect(() => {
   const editbyid=async()=>{
try{
const response=await api.get(`/admin/edit/${id}`)
setuser(response.data)
console.log(response.data)
}catch(e){
    console.log(e)
}
   }
   editbyid()
 }, [])
 const push=(e)=>{
    console.log(user)
    setuser({...user,[e.target.name]:e.target.value})
 }
 const trigger=async()=>{
  try{
    
  const response=await api.patch(`/admin/update/${idx}`,{...user})
   console.log(response.data)
    
    navigate("/admin")
    toast.success("succesfully data send in to database")
  
  console.log(response)
  }catch(e){
    console.log("error while post data from register",e)
   
  }
  
 }
  return (
    <>
   
    <div>
    <ToastContainer/>
      <div className="main">
     <div className="sub-main"style={{"height":"590px"}}>
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
           </div>
         </div>
         <div>
           <h1>Edit Page</h1>
           <div className="second-input" style={{"margin":"20px"}}>

             <img src={name} alt="Name" className="email"/>
             <input onChange={push} name="Name" type="text" value={user.Name}  className="name" />
           </div>
           <div>
             <img src={email} alt="Email" className="email"/>
             <input  onChange={push} name="Email" type="email" value={user.Email} placeholder="Enter your Email" className="name"/>
           </div>
          
           <div className="second-input">
             <img src={phone} alt="phone" className="email"/>
             <input onChange={push} name="Phone" type="phone" value={user.Phone} placeholder="Enter your phone" className="name"/>
           </div>
           
          <div className="login-button">
          <button style={{"width":"150px","borderRadius":"20px","backgroundColor":"green"}} onClick={trigger}>update</button>
          </div>
           
           
 
         </div>
       </div>
     </div>
    </div>
    </div>
    </>
  )
}

export default LoginUi


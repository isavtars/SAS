import React, { useState } from 'react'
import "./Teacherlogin.css"

import {tlogin} from "../../../../redux/apiTCallls"
 import Aprofile from "../../../../images/a.png"





import { useDispatch } from 'react-redux';
import Navbar from '../../../Layout/NavBar';
import { useNavigate, Link } from 'react-router-dom';


const Teacherlogin = () => {


const dispatch=useDispatch();
   const [input, setinput] = useState({})
   const nagavation=useNavigate();
    
const push=(e)=>{  
  setinput({...input,[e.target.name]:e.target.value})
  console.log(input)
    }


    //loginappi
    const handleSubmit=(e)=>{
      e.preventDefault();
      tlogin(dispatch,input,e,nagavation)
      nagavation("/tadmin")
    }


   
  return (
    <div>

    <Navbar/>
    <div  style={{
        height: "85vh",
        display: "flex",
        width:"100vw",
        alignItems: "center",
        justifyContent: "center",
      }} className="bg-[#f5f5f5] shadow-md">

    <form onSubmit={handleSubmit} className="Tloginform  shadow-md">

    <div className="profileAfdmlogin flex justify-center flex-col items-center mb-2">
        <div className="imgprofii">
    <img src={Aprofile} alt="" />
        </div>
{/* 
        <h2 className='bg-[#333332] p-1 text-red-500   text-xl  rounded-sm'>teachets logins</h2> */}
    </div>
    

     <div className="tUSERNME h-14 bg-gray-500 mb-2 w-full  ">
      <input
      
         className="bg-[#e2e2ee]  rounded-sm shadow-inner text-xl text-black  outline-none h-[100%] w-[100%] px-1"
        type="text"
        placeholder="username"
        onChange={push}
        name="Email"
      />
      </div>

 <div className="passSERNME h-14 w-full mb-2">
            <input
      
          className="bg-[#2e2a3c] shadow-inner rounded-sm text-xl text-white outline-none h-[100%]   w-[100%] px-1"
        type="password"
        placeholder="password"
        onChange={push}
        name="Password"
      />
      </div>
      <div className='flex justify-end'>

    
       <span className='text-[#0998f8] mb-1 cursor-pointer'>forget password?? <Link to='/password-reset'><span className='text-orange-500' >click heare</span></Link></span>
  </div>
      <div className="divbtktelog  h-12 w-full flex justify-center items-center">
<button  className="bg-[#0272f3] h-[100%] w-[20%] rounded-md text-white">
        Login
      </button>
      </div>

     
      

    </form>
    </div>
    </div>
  )
}

export default Teacherlogin
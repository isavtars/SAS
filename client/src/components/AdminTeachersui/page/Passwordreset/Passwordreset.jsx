import React, { useState } from 'react'
import Navbar from '../../../Layout/NavBar'
import api from "../../.././service/api.js"

const Passwordreset = () => {


    const [input, setinput] = useState({});
    console.log(input)

    const push=(e)=>{
setinput({...input,[e.target.name]:e.target.value})

    }

    

    const handleSubmit=async(e)=>{
         e.preventDefault();
        try{
         const response =await api.post("/teacheradmin/passwordreset",{...input})
            console.log(response.data)
                  console.log(response)

        }catch(err){
            console.log(err)
        }
    }

  return (
    <>   <Navbar/>
    <div  style={{
        height: "85vh",
        display: "flex",
        width:"100vw",
        alignItems: "center",
        justifyContent: "center",
      }} className="bg-[#f5f5f5] shadow-md">

    <form onSubmit={handleSubmit} className="Tloginform  shadow-md">

    <div className="profileAfdmlogin flex justify-center flex-col items-center mb-2">
       
       <h1>reset assword</h1>

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

      <div className='flex justify-end'>

    
  </div>
      <div className="divbtktelog  h-12 w-full flex justify-center items-center">
<button  className="bg-[#0272f3] h-[100%] w-[20%] rounded-md text-white">
        Login
      </button>
      </div>

     
      

    </form>
    </div>
   
    </>

  )
}

export default Passwordreset
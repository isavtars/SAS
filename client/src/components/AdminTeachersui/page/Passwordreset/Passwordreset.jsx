import React, {useState } from 'react'
import Navbar from '../../../Layout/NavBar'
import api from "../../.././service/api.js"
import { useNavigate, Link } from 'react-router-dom';

const Passwordreset = () => {
 const navigate=useNavigate();

    const [input, setinput] = useState({});
    console.log(input)

    const push=(e)=>{
setinput({...input,[e.target.name]:e.target.value})

    }

    
    

    

    const handleSubmit=async(e)=>{
         e.preventDefault();

        if(input.value===""){
          console.log("email required")
        }
        else{
        try{
         const response =await api.post("/teacheradmin/passwordreset",{...input})
            console.log(response.data.link)
               

            if(response.data.sucess){
              //  <Link to={response.data.link}>

              //  </Link>
                e.target.reset();
            }else{
              console.log("you email verifactions faileds")
            }
        
        }catch(err){
            console.log(err)
        }
      }
    }

  return (
    <>   <Navbar/>
    <div className="bg-[#f5f5f5] h-[90vh] flex items-center justify-center shadow-md">

    <form onSubmit={handleSubmit} className="Tloginform  shadow-md">

    <div className="profileAfdmlogin  p-5 shadow-sm  flex justify-center flex-col items-center mb-2">
       
       <h1 className='text-3xl text-[#480ebd] font-bold'>Enter you  Email</h1>
      

    </div>
    

     <div className="tUSERNME p-5 w-full  ">
     <h1 className='text-xl text-[#480ebd] mb-2 font-bold'>Email</h1>
      <input
      
         className="bg-[#cbcbdf]  rounded-sm shadow-inner text-xl text-black mb-5  outline-none  h-12 p-2 w-[100%] px-1"
        type="text"
        placeholder="email to reset-password"
        onChange={push}
        name="Email"
      />
      </div>

     
      <div className="divbtktelog  h-10  w-full flex justify-center items-center">
<button  className="bg-[#5117d7] h-[100%] w-[90%] p-2 rounded-md text-white">
        submit
      </button>
      </div>

     
      

    </form>
    </div>
   
    </>

  )
}

export default Passwordreset
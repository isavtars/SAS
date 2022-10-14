import React, { useContext, useState } from 'react'
import {GiBalaclava} from "react-icons/gi"
import "./AdminLogin2.css"
import api from "../../service/api.js"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//GiBalaclava
import iamgesl from "../../../images/dl.png"



//redux
import {loginStart, loginSuccess,loginFailed} from "../../../redux/userRedux";
import { useDispatch,useSelector  } from "react-redux";


const AdminLogin2 = () => {
  //redux hook
  const dispatch=useDispatch();
  
const [input, setinput] = useState({

})

  //handlelogin
const handlelogin=(e)=>{
  setinput({...input, [e.target.name]:e.target.value})
console.log(input.Password)
console.log(input.Email)


}

//authlogin
const authlogin=async(e)=>{
  e.preventDefault();
  // dispatch(loginStart())
  try{
  
        const response= await api.post("/admin/login",{...input});
      

      if(response.data.isAdmin){
      //
      toast.success("login sucess")
      setinput({})
      e.target.reset();
      // dispatch(loginsucess(response.data))
      dispatch(loginSuccess(response.data))
        console.log(response.data)
      }else{
        toast.error("you are not admin")
      }
   
      

  }catch(err){
    
    toast.error("login error")
  }



}


return(
  <div className="Dlogin">
  <ToastContainer />
  <div className="dlcont">
    <div className="side1 shadow-lg rounded-sm  ">

      <img src={iamgesl} alt="" className="loginimg" />
    </div>

    <div class="md flex">
      <div className='bg-red-500 h-60 w-2 ml-1'></div>
      <div className='bg-gray-800 h-50 w-2 ml-1'></div>
      <div className='bg-green-500 h-60 w-2 ml-1'></div>
    </div>
    <div className="sidetwo">

    <div className="headline bg-white h-16 flex justify-center items-center shadow-sm mx-2 ">   <h2 class="text-[#FCA61F] text-2xl">admin login</h2> <GiBalaclava size={40} color="red"/></div>

 <hr className='mx-2 my-2 bg-red-500 '/>
      <form action="" className='mx-2' onSubmit={authlogin}>

        <div className="dlemail">
      
              <input type="text" className='text-white rounded-sm px-2' placeholder='email' name="Email" onChange={handlelogin}/>
        </div>

        <div className="dlpassword">
      
              <input type="password" className='text-white rounded-sm px-2' placeholder='password ' name="Password"  onChange={handlelogin}/>
        </div>

        <div className="dlsubmit w-full">
              <input type="submit" className='bg-[#FCA61F] dlsubmit '/>
        </div>
      </form>
    </div>
  </div>



  </div>
)
}
export default AdminLogin2;

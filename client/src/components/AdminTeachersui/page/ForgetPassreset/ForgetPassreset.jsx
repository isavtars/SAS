import React, { useEffect, useState } from 'react'
import Navbar from '../../../Layout/NavBar'
import { useParams } from 'react-router-dom';
import api from "../../../service/api"
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const ForgetPassreset = () => {
    const {id,token} =useParams();
    const navigate=useNavigate();


    const [message, setmessage] = useState()


    useEffect(() => {

      const gettokennsis=async()=>{
        try{
           const response = await api.get(`/teacheradmin/reset-password/${id}/${token}`)
           console.log(response.data)
           setmessage(response.data)
        }catch(err){
          console.log(err)
        }

      }
      gettokennsis()
     
    }, [])

    console.log(id ,token)
  

    const [input, setinput] = useState({})
  const  push =(e)=>{
 setinput({...input,[e.target.name]:e.target.value})
 console.log(input)
  }

    const editdpawword=async(e)=>{
      e.preventDefault();

        if(message){
        try{
           const response = await api.post(`/teacheradmin/reset-password/${id}/${token}`,{...input})
           console.log(response.data)

           if(response.data.status){
            e.target.reset();
            navigate("/teacherlogin")
                 
  swal({
  title: "resetpassword sucess",
  text:"your passwor was reset ",
  icon: "success",
 
})
           }
        }catch(err){
          console.log(err)
        }
      }else{
        console.log("you are not verified")
                       
  swal({
  title: "you are not verified",
  text:"something wrong",
  icon: "warning",
 
})
      }
      }
  


  return (
    <div>
        <Navbar />

 
        <div className="FORENTERPAWWWORE h-[85vh] flex   items-center justify-center bg-[#f5f5f5] shadow-md">

        <div class="formcopnnjja bg-[white] p-8">

        

       
<header className='shadow-md p-5 mb-2'>
            <h2 className='text-3xl  text-[#480ebd] font-bold'>Enter password</h2>
        </header>
        <form action="" onSubmit={editdpawword} className='flex flex-col'>

            <div className="forgetpasswordenput mb-2">
             <h1 className='text-xl text-[#480ebd] mb-2 font-bold'>Passwords</h1>
        <input
         className="bg-[#cbcbdf]  rounded-sm shadow-inner text-xl text-black mb-5  outline-none  h-12 p-2 w-[100%] px-1"
        type="password"
        placeholder="reset-password"
        onChange={push}
        name="Password"
      />
            </div>

             
      <div className="divbtktelog  h-10  w-full flex justify-center items-center">
<button  className="bg-[#5117d7] h-[100%] w-[90%] p-2 rounded-md text-white">
        submit
      </button>

</div>
        </form>
</div>
        </div>
    </div>
  )
  }

export default ForgetPassreset
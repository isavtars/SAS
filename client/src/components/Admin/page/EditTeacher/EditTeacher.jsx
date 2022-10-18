import React,{useState,useEffect} from 'react';
import {Link,useNavigate,useParams } from "react-router-dom";
import "./EditTeacher.css"

import api from "../../../service/api"

import { useSelector} from 'react-redux';
import swal  from 'sweetalert';



const EditTeacher = () => {
 const navigate=useNavigate();
const {id}=useParams();
const idx=id.toString()

const token = useSelector((state) => state.user.currentUser.token);
 const [user,setuser]=useState({})
 const [image,setimage]=useState([])



 useEffect(() => {
   const editbyid=async()=>{
try{
const response=await api.get(`/teachers/findteachers/${id}`,{
  headers:{
       "Content-Type": "multipart/form-data",
    token:token,
  }
})

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
 const trigger=async(e)=>{
  e.preventDefault();
  try{
    
  const response=await api.patch(`/teachers/update/${idx}`,{...user},{
    headers:{
         "Content-Type": "multipart/form-data",
      token:token,
    }
  })
   
  if(response.data.success){
  swal({
  title: "update sucess ", 
  text: "teacher upadte sucess",
  icon: "success",
  buttons: true,
})
    navigate("/admin/teachers")
}else{
swal({
  title: "faliied to edits ", 
  text: "you are not able to update",
  icon: "waring",

})

}
   
  
  }catch(e){
    console.log("error while post data from register",e)
   
  }
  
 }
 const imgsrc= "http://localhost:8000/uploads/"+ user.image;

  return (
    <>
  
    <div className="tedits">
      <div className="teditscom shadow-md">

      <div className="teimgsections py-5 px-2">
      {/* imagesections */}

      <div className="ettitle bg-slate-800 rounded-md text-2xl">
        Edit teachers
      </div>
       <div className="edttopimg">
          <img  src={imgsrc} alt="" />
       </div>
       <div className="details ">
      
       <div className="Name flex">
      
          <h1>{user._id}</h1>
       </div>


       <div className="Name flex">
      
          <h1>{user.TeacherName}</h1>
       </div>
       
       <div className="Name flex">
       
          <h1>{user.Email}</h1>
       </div>


        <div className="Name flex">
      
          <h1>{user.GRADE}</h1>
       </div>

       </div>
        
      </div>

      {/* <div className="decoratuionds">
        lll
      </div> */}

      <div className="tefromcont ">

       <form action="" className='teform px-1' onSubmit={trigger}>

      <div className="TeacherName h-[58px]  mb-1 px-1  w-[100%]">
      <input type="text" value={user.TeacherName} onChange={push} placeholder='name' className='h-[100%] text-white text-xl bg-[#2f3333] w-[100%] px-1 Class
Properties
outline-none rounded-sm'  name="TeacherName"/>
      </div>


      <div className="telogindfe flex mb-1 w-[100%]  ">

      <div className="Email h-[58px]  mb-1  px-1 w-full">
      <input type="text" value={user.Email} onChange={push} placeholder='email' className='h-[100%] text-white text-xl bg-[#2b3638] w-[100%] px-1 Class
Properties
outline-none rounded-sm'  name="Email"/>
      </div>


      <div className="TPassword h-[58px]  mb-1 px-1  w-full">
      <input type="text" value={user.TPassword} onChange={push} placeholder='password' className='h-[100%] text-white text-xl bg-[#32323e] w-[100%] px-1 Class
Properties
outline-none rounded-sm'  name="TPassword"/>
      </div>
      </div>


      <div className="Phone h-[58px]  mb-1  w-full px-1">
      <input type="text" value={user.Phone} onChange={push} placeholder='name' className='h-[100%] text-white text-xl bg-[#2a3638] w-[100%] px-1 Class
Properties
outline-none rounded-sm'  name="Phone"/>
      </div>


      <div className="Address h-[58px]  mb-1 px-1  w-full">
      <input type="text" value={user.Address} onChange={push} placeholder='Address' className='h-[100%] text-white text-xl bg-[#2d3331] w-[100%] px-1 Class
Properties
outline-none rounded-sm' name="Address" />
      </div>


<div className="qulaficgrde flex mb-1">

      <div className="Qulification h-[58px]  mb-1 px-1 w-full">
      <input type="text" value={user.Qulification} onChange={push} placeholder='qulaifactions' className='h-[100%] text-white text-xl bg-[#272020] w-[100%] px-1 Class
Properties
outline-none rounded-sm' name="Qulification" />
      </div>


      <div className="GRADE h-[58px]  mb-1 px-1  w-full">
      <input type="text" value={user.GRADE} onChange={push} placeholder='Grade' className='h-[100%] text-white text-xl bg-[#2f2f37] w-[100%] px-1 Class
Properties
outline-none rounded-sm' name="GRADE" />
      </div>
</div>


      <div className="Doj h-[58px]  mb-1  px-1 w-full">
      <input type="date" value={user.Doj} onChange={push} placeholder='date/of/join' className='h-[100%] text-white text-xl  w-[100%] px-1 
outline-none rounded-sm bg-slate-600' name="Doj" />
      </div>

      <div className="submitbtn h-[58px]  rounded-sm text-white bg-[#4204bd] mb-1  px-4 w-full">
        <input type="submit" value='submit' className=' h-[100%] text-white text-xl  w-[100%] px-2 ' />
      </div>


  
       </form>

      </div>
      
   
    </div>
    </div>
    
    </>
  )
}

export default EditTeacher


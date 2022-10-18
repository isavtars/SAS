import React,{useState,useEffect} from 'react';
import {Link,useNavigate,useParams } from "react-router-dom";
import "./AddTeachers.css"

import api from "../../../service/api"

import { useSelector} from 'react-redux';
import swal  from 'sweetalert';



const AddTeachers = () => {
 const navigate=useNavigate();
// const {id}=useParams();
// const idx=id.toString()

const token = useSelector((state) => state.user.currentUser.token);
 const [user,setuser]=useState({})
 const [image,setimage]=useState([])




 const push=(e)=>{
    console.log(user)
    setuser({...user,[e.target.name]:e.target.value})
 }
const  trigger=async(e)=>{
  e.preventDefault();
  try{


    
  const response=await api.post(`/teachers/addteachers`,{...user,image:image},{
    headers:{
         "Content-Type": "multipart/form-data",
      token:token,
    }
  })

  if(response.data.success){
  swal({
  title: "add success",
  text: " teachers added sucessfully",
  icon: "success",
  buttons: true,
})  
    navigate("/admin/teachers")
  }else{
      swal({
  title: "you cant able to add any items",
  text: "you have login admin account to add teachers",
  icon: "warning",
  
})  
  }
   
  
   
  
  }catch(e){
    console.log("error while post data from register",e)
   
  }
  
 }
 const imgsrc= "http://localhost:8000/uploads/"+ user.image;

  return (
    <>
  
    <div className="atedits">
     

  <div className="addTEacher bg-slate-200 mb-2 text-xl text-red-500 h-20 w-full flex items-center justify-center">
    Teachers Add
  </div>

      
      {/* formcointainner */}
      <div className="atefromcont">

       <form action="" className='ateform px-1' onSubmit={trigger}>

      <div className="aTeacherName h-[58px]  mb-1 px-1  w-[100%]">
      <input type="text"  onChange={push} placeholder='name' className='h-[100%] text-white text-xl bg-[#282830] w-[100%] px-1 Class
Properties
outline-none rounded-sm'  name="TeacherName"/>
      </div>


      <div className="atelogindfe flex mb-1 w-[100%]  ">

      <div className="aEmail h-[58px]  mb-1  px-1 w-full">
      <input type="text"  onChange={push} placeholder='email' className='h-[100%] text-white text-xl bg-[#282830] w-[100%] px-1 Class
Properties
outline-none rounded-sm'  name="Email"/>
      </div>


      <div className="aTPassword h-[58px]  mb-1 px-1  w-full">
      <input type="text"  onChange={push} placeholder='password' className='h-[100%] text-white text-xl bg-[#282830] w-[100%] px-1 Class
Properties
outline-none rounded-sm'  name="TPassword"/>
      </div>
      </div>


      <div className="aPhone h-[58px]  mb-1  w-full px-1">
      <input type="number"  onChange={push} placeholder='phone' className='h-[100%] text-white text-xl bg-[#282830] w-[100%] px-1 Class
Properties
outline-none rounded-sm'  name="Phone"/>
      </div>


      <div className="aAddress h-[58px]  mb-1 px-1  w-full">
      <input type="text"  onChange={push} placeholder='Address' className='h-[100%] text-white text-xl bg-[#282830] w-[100%] px-1 Class
Properties
outline-none rounded-sm' name="Address" />
      </div>


<div className="aqulaficgrde flex mb-1">

      <div className="aQulification h-[58px]  mb-1 px-1 w-full">
      <input type="text"  onChange={push} placeholder='qulaifactions' className='h-[100%] text-white text-xl bg-[#282830] w-[100%] px-1 Class
Properties
outline-none rounded-sm' name="Qulification" />
      </div>


      <div className="aGRADE h-[58px]  mb-1 px-1  w-full">
      <input type="text"  onChange={push} placeholder='Grade' className='h-[100%] text-white text-xl bg-[#282830] w-[100%] px-1 Class
Properties
outline-none rounded-sm' name="GRADE" />
      </div>
</div>
         
         <div className="aimhage flex">

      <div className="aDoj h-[58px]  mb-1  px-1 w-full">
      <input type="date" onChange={push} placeholder='date/of/join' className='h-[100%] text-white text-xl  w-[100%] px-1 
outline-none rounded-sm bg-[#282830]' name="Doj" />
      </div>

      
      <div className="aimage h-[58px]  mb-1  px-1 w-full">
      <input type="file"  onChange={(e)=>setimage(e.target.files[0])} placeholder='date/of/join' className='h-[100%] text-white text-xl  w-[100%] px-1 
outline-none rounded-sm bg-[#282830]' name="image" />
      </div>
         </div>


      <div className="asubmitbtn h-[58px]  rounded-sm text-white bg-[#7e00e6] mb-1  px-4 w-full">
        <input type="submit"  className=' h-[100%] text-white text-xl  w-[100%] px-2 ' />
      </div>


  
       </form>

      </div>
    </div>
  
    
    </>
  )
}

export default AddTeachers;


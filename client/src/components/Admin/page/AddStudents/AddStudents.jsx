import React, { useState } from 'react'
import "./AddStudents.css"
import iamfdfg from "../../../../images/a.png"
import api from "../../.././service/api"
import { useSelector } from 'react-redux'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom';
//cslllname eror

const AddStudents = () => {

  const token = useSelector((state) => state.user.currentUser.token);
  
const navigate=useNavigate();

  const [input, setinput] = useState({
  })
 const [image, setimage] = useState([])


const push=(e)=>{
setinput({...input,[e.target.name]:e.target.value})
console.log(input)
}


const tigger=async(e)=>{
e.preventDefault();

try{

   const response = await  api.post("teachers/addstudents",{...input,image:image},{
    headers:{         
            "Content-Type": "multipart/form-data",
            token:token,
          },
   })
   console.log(response.data)

   if(response.data.sucess){
    swal({
  title: " sucessfully",
  text: "new student added sucessfully",
  icon: "success",
  
})
navigate("/admin/students")

   }else{
swal({
  title: "warning",
  text: "you are not admin",
  icon: "warning",
  
})
   }
  
}catch(err){
  console.log(err)
}


}

  return (
    <div className='addstudentsadmin'>
 
<form onSubmit={tigger} >

<div className="imagestuddents bg-[#d7e3eb] shadow-inner flex justify-center items-center  mb-4">
<div className="imgwdkdsdsakd  shadow-inherit h-[180px]">
<img src={iamfdfg} alt=""  className='h-[100%]'/>
<input type="file" onChange={(e)=>setimage(e.target.files[0])} name='image' />
</div>

</div>

<div class="addstudenstinputcont" className='flex justify-between items-center p-5'>


 <div className="newProduct">
     
     
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" name="studentName" onChange={push}  className='sssi text-xl outline-none bg-[#d9e1ec] text-[black]'   placeholder='student name' />
        </div>
        <div className="addProductItem">
          <label>Roll.no</label>
          <input type="text" name='RollNumber' onChange={push} className='sssi text-xl outline-none bg-[#d9e1ec] text-[black]'  placeholder="student Rollnumber" />
        </div>
        <div className="addProductItem">
          <label>ParentsName</label>
          <input type="text" name="ParentsName" onChange={push} className='sssi text-xl outline-none bg-[#d9e1ec] text-[black]'  placeholder="ParentsName" />
        </div>
       
        
     
    </div>

    <div className="addstidicvee">

      <div className="addProductItem">
          <label>Address</label>
          <input type="text" name="Address" onChange={push} className='sssi text-xl outline-none bg-[#d9e1ec] text-[black]'  placeholder="Address" />
        </div>

        <div className="addProductItem">
          <label>DOB</label>
          <input type="date" name="DOB" onChange={push} className='sssi text-xl outline-none bg-[#d9e1ec] text-[black]'  placeholder="" />
        </div>

        <div className="addProductItem">
          <label>Phonenumber</label>
          <input type="number" name='Phonenumber' onChange={push} className='sssi text-xl outline-none bg-[#d9e1ec] text-[black]'  placeholder="9843111113" />
        </div>
    </div>

     <div className="addstidicv">

      <div className="addProductItem">
          <label>Branch</label>
          <input type="text" onChange={push} name="Branch" className='sssi text-xl outline-none bg-[#d9e1ec] text-[black]'  placeholder="TU" />
        </div>

        <div className="addProductItem">
          <label>Course</label>
          <input type="text" onChange={push}  name="Course" className='sssi text-xl outline-none bg-[#d9e1ec] '  placeholder="BCA" />
        </div>

        <div className="addProductItem">
          <label>Semester</label>
          <input type="text" onChange={push} name="Semester" className='sssi text-xl outline-none bg-[#d9e1ec] '  placeholder="fourth" />
        </div>
    </div>
    </div>

    <button className="addProductButton bg-[#8047e3] p-3 text-white w-full rounded-sm">Add Students</button>
    </form>

    </div>
  )
}

export default AddStudents;
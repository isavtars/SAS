import React,{useState,useEffect} from 'react'
import {TableContainer,Table,TableHead,TableRow,TableCell,Button} from "@mui/material"

import "./Teachers.css"
import api from '../../../service/api'
import {Link, useNavigate } from "react-router-dom"

import { useSelector} from 'react-redux';
 import swal from 'sweetalert';


const Teachers = () => {

//redux
  const token = useSelector((state) => state.user.currentUser.token);
  const navigate=useNavigate();
  
 const[users,setusers]=useState([])
 const [datatem, setdatatem] = useState([])

const [input, setinput] = useState('')



 useEffect(() => {
  const getuser=async()=>{
      try{
       const response=await api.get("/teachers/all",{

         
          headers:{         
            "Content-Type": "multipart/form-data",
            token:token,
          },

       })
       
       console.log(response.data)
       setusers(response.data.response)
       setdatatem(response.data.response)
    
      }catch(e){
          console.log("error while get data",e)
      }
     }
 getuser()
 
 console.log(users)
 }, [])


 useEffect(() => {

  const searchfilter=async()=>{
    try{

      const response =await api.get(`/teachers/searchfilter?search=${input}`,{
        headers:{

           "Content-Type": "multipart/form-data",
          token:token,

        }
      })
      setusers(response.data)

      console.log(response.data.response)
      console.log(response.data)

    }catch(err){
      console.log(err)
    }


  }

  if(input) searchfilter();
  else{
    setusers(datatem)
  }

   
   
 }, [input])
 

  const styles={
  color:"greenblue",
  fontWeight:"bold",
  size:"30px",
  backgroundColor:"whiteSmoke",
  padding:"30px 10px",

 
  
 }
 
 const search=(e)=>{
  setinput(e.target.value);
  console.log(input)
  
 }
 const deluser=async(id,idx)=>{
  try{


  swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this imaginary file!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then(async(willDelete) => {
  if (willDelete)  {

  const response=await api.delete(`/teachers/del/${id}`,{
    headers:{
           "Content-Type": "multipart/form-data",
          token:token,
        }
  })
  if(response.data.success){
    const newuserlist = users.filter((filter,index)=>{
     return index !==idx; //
    })
    setusers(newuserlist)
    swal( {
      title: "admin delete success?",
      text: "you item was delete",
      icon: "success",
    });
  }else{
     swal({
  title: "you are not admin?",
  text: "you cant delete any items if you want to delete item you can login admin accounts",
  icon: "warning",
  
})
  }
  } else {
    swal({
  title: "you are not admin?",
  text: "you item cant delete",
  icon: "warning",
  
})
  }
});


  }catch(e){
 swal("server error");
  }
}

  return (
   
   
    <div style={{padding:"0px 10px",cursor: "pointer"}}>


     
    
    <div className='aaa'>
       <input onChange={search} style={{backgroundColor:"whiteSmoke",padding:"1px 50px"
           ,"borderRadius":"5px","textAlign":"center","height":"40px" ,"marginLeft":"10px",outline:"none"}} type="text" placeholder='find teachers....' />
            
            
           <Button variant="contained" ><Link to="/admin/addteacher">add teachers</Link> </Button>
           </div>
   
    
    <TableContainer style={{"backgroundColor":"white"}}>
    <Table>
    <TableHead>


      </TableHead>
    
    <TableHead >
   
    <TableRow style={{"backgroundColor":"green"}}>
    <TableCell style={styles}> id</TableCell>
    <TableCell style={styles}>profile</TableCell>
    <TableCell style={styles}>TeacherName</TableCell>
    <TableCell style={styles}> Email</TableCell>
    <TableCell style={styles}> Phone</TableCell>
    <TableCell style={styles}>Teachersdetails</TableCell>
    <TableCell style={styles}>Edits</TableCell>
    <TableCell style={styles}>Delets</TableCell>
   
    </TableRow>
  
    
  {users.length>0 ?users.map((data,index)=>{
    return<TableRow key={index} style={{margin:""}}>
    <TableCell >{index+1}</TableCell>
    <TableCell > <div className='imgtablecell shadow-md bg-slate-900'><img src={data.image} alt="" /></div></TableCell>
    <TableCell>{data.TeacherName}</TableCell>
    <TableCell>{data.Email}</TableCell>
    <TableCell>{data.Phone}</TableCell>
    <TableCell>
      <Button variant="contained">view</Button>
    </TableCell>
    
    
     <TableCell>
<Link style={{"textDecoration":"none"}} to={`/admin/editteachers/${data._id}`}> <Button variant="contained" style={{"backgroundColor":"green"}} >Edit</Button></Link>
    </TableCell>
    <TableCell>
<Button onClick={()=>deluser(data._id,index)} variant="contained" style={{"backgroundColor":"red"}}>Delete</Button>
    </TableCell>
    
   
      
    </TableRow>
  
    
   }):( 
    <TableRow>
    <TableCell>user not found
   </TableCell>
   <TableCell>user not found
   </TableCell>
    <TableCell>user not found
   </TableCell>
   <TableCell>user not found
   </TableCell>
    <TableCell>user not found
   </TableCell>
    <TableCell>user not found
   </TableCell>
   <TableCell>user not found
   </TableCell>
    
   
   </TableRow>
   
   )}
  
  

  

    </TableHead>
    
    </Table>
    
   
    </TableContainer>
    
    
    </div>

 
  
  )
  
}

export default Teachers



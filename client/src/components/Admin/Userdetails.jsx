import React,{useState,useEffect} from 'react'
import {TableContainer,Table,TableHead,TableRow,TableCell,Button} from "@mui/material"
import api from '../service/api'
import {Link, useNavigate } from "react-router-dom"



const Userdetails = () => {

  const navigate=useNavigate();
  

 const[users,setusers]=useState([])
 const [datatem, setdatatem] = useState([])

const [input, setinput] = useState('')



 useEffect(() => {
  const getuser=async()=>{
      try{
       const response=await api.get("/user/all")
       
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

      const response =await api.get(`/user/searchfilter?search=${input}`)
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

 if(window.confirm("Are u Sure to Delete the user?")){

  const response=await api.delete(`/admin/del/${id}`)
  if(response.data){
    const newuserlist = users.filter((filter,index)=>{
     return index !==idx; //
    })
    setusers(newuserlist)
    
  }else{
    console.log("unable to delete")
  }}
  }catch(e){
console.log(e)
  }
}

  return (
   
   
    <div style={{padding:"0px 10px",cursor: "pointer"}}>
    
    <TableContainer style={{"backgroundColor":"white"}}>
    <Table>
    <TableHead>

  
     <TableRow>
     
    <TableCell >
    <div style={{display:"flex", }}>
       <input onChange={search} style={{backgroundColor:"whiteSmoke",padding:"1px 50px"
           ,"borderRadius":"5px","textAlign":"center","height":"40px" ,"marginLeft":"10px",outline:"none"}} type="text" placeholder='find teachers....' />

           <Button >add teachers</Button>
           </div>
    </TableCell>
    </TableRow>
      </TableHead>
    
    <TableHead >
   
    <TableRow style={{"backgroundColor":"green"}}>
    <TableCell style={styles}> id</TableCell>
    <TableCell style={styles}> Name</TableCell>
    <TableCell style={styles}> Email</TableCell>
    <TableCell style={styles}> Phone</TableCell>
    <TableCell style={styles}>Teachersdetails</TableCell>
    <TableCell style={styles}>Edits</TableCell>
    <TableCell style={styles}>Delets</TableCell>
   
    </TableRow>
  
    
  {users.length>0 ?users.map((data,index)=>{
    return<TableRow key={index} style={{margin:""}}>
    <TableCell >{index}</TableCell>
    <TableCell>{data.Name}</TableCell>
    <TableCell>{data.Email}</TableCell>
    <TableCell>{data.Phone}</TableCell>
    <TableCell>
      <Button variant="contained">view</Button>
    </TableCell>
    
    
     <TableCell>
<Link style={{"textDecoration":"none"}} to={`/edituser/${data._id}`}> <Button variant="contained" style={{"backgroundColor":"green"}} >Edit</Button></Link>
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

export default Userdetails



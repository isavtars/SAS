

 import React,{useState,useEffect} from 'react'
import {TableContainer,Table,TableHead,TableRow,TableCell,Button} from "@mui/material"

import api from '../../../service/api'
import {Link, useNavigate } from "react-router-dom"

import { useSelector} from 'react-redux';
 import swal from 'sweetalert';
import { GiCogLock } from 'react-icons/gi';


 let todayday= new Date().toLocaleString().split(',')[0];

const AllatendenceReport = () => {

//redux
  const {classTeacherOf,ttoken} = useSelector((state) => state.teacher.currentUser
);

  const navigate=useNavigate();
  
 const[users,setusers]=useState([])

 console.log(users)

 



// 

 useEffect(() => {
  const getuser=async()=>{
      try{
       const response=await api.get(`/attendence/viewattendence?semq=${classTeacherOf}`,{
          headers:{         
            "Content-Type": "multipart/form-data",
            ttoken:ttoken,
          },

       })
       
       console.log(response.data)
       setusers(response.data)
      }catch(e){
          console.log("error while get data",e)
      }
     }
 getuser() 
 console.log(users)
 }, [])




  const styles={
  color:"greenblue",
  fontWeight:"bold",
  size:"30px",
  backgroundColor:"whiteSmoke",
  padding:"30px 10px",
 }
 


  return (
   
   
    <div>


     
    <header className='bg-[#cad3e4]  h-16 flex   text-xl font-bold capitalize  text-[#292929] items-center justify-center mb-1'>
      <h1>{`All Attendence reports`}</h1>
     

    </header>
     
    
    <TableContainer style={{"backgroundColor":"white",zIndex:"-100"}}>
    <Table>
    <TableHead>


      </TableHead>
    
    <TableHead >
   
    <TableRow style={{"backgroundColor":"green"}}>
    <TableCell style={styles}> SN</TableCell>
 
    <TableCell style={styles}>Studentname</TableCell>
    <TableCell style={styles}>Roll.no</TableCell>
    <TableCell style={styles}>Date</TableCell>
     <TableCell style={styles}>Status</TableCell>
    </TableRow>
  
    
  {
     
    users.length>0?users.map((data,index)=>{
    
    //"2/18/2016"
   
      let daaaate=data.Date
       console.log(todayday)
      console.log(daaaate)
    if(todayday === daaaate){
        console.log("today date is true")
    }else{ console.log("false")}

    

   
   
    return<TableRow key={index} style={{margin:""}}>
    <TableCell >{index+1}</TableCell>

    <TableCell>{data.Sname}</TableCell>
    
    
    <TableCell>{data.RollNumber}</TableCell>
     <TableCell>{data.Date}</TableCell>
     <TableCell >
    
 {data.Attend?
    <button className='bg-[green] p-3 text-[white] rounded-sm '>present</button>:
     <button className='bg-[red] p-3 text-white rounded-sm '>    absent+ </button>
 }
     </TableCell>
    </TableRow>
  
    
   }):"attendta not done"
     
     
  
   }
  
  

  

    </TableHead>
    
    </Table>
    
   
    </TableContainer>
    
    
    </div>

 
  
  )
  
}

export default AllatendenceReport












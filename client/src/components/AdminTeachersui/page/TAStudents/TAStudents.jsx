


 import React,{useState,useEffect} from 'react'
import {TableContainer,Table,TableHead,TableRow,TableCell,Button} from "@mui/material"

import "./TAStudents.css"
import api from '../../../service/api'
import {Link, useNavigate } from "react-router-dom"

import { useSelector} from 'react-redux';
 import swal from 'sweetalert';


const  TAStudents = () => {

//redux
  const semq = useSelector((state) => state.teacher.currentUser.classTeacherOf
);

 const ttoken = useSelector((state) => state.teacher.currentUser.ttoken
);
  const navigate=useNavigate();
  
 const[users,setusers]=useState([])
 const [datatem, setdatatem] = useState([])

const [input, setinput] = useState('')



 useEffect(() => {
  const getuser=async()=>{
      try{
       const response=await api.get(`/teacheradmin/students?semq=${semq}`,{

         
          headers:{         
            "Content-Type": "multipart/form-data",
            ttoken:ttoken,
          },

       })
       
       console.log(response.data)
       setusers(response.data)
       setdatatem(response.data)
    
      }catch(e){
          console.log("error while get data",e)
      }
     }
 getuser()
 
 console.log(users)
 }, [])


//  useEffect(() => {

//   const searchfilter=async()=>{
//     try{

//       const response =await api.get(`/teachers/studentssearchfilter?search=${input}`,{
//         headers:{

//            "Content-Type": "multipart/form-data",
//           token:token,

//         }
//       })
//       setusers(response.data)

//       console.log(response.data.response)
//       console.log(response.data)

//     }catch(err){
//       console.log(err)
//     }


//   }

//   if(input) searchfilter();
//   else{
//     setusers(datatem)
//   }

   
   
//  }, [input])
 

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


  return (
   
   
    <div style={{padding:"0px 10px",cursor: "pointer",zIndex:-"100"}}>


     
    
    <div className='saaa '>
       <input onChange={search} style={{backgroundColor:"whiteSmoke",padding:"1px 50px"
           ,"borderRadius":"5px","textAlign":"center","height":"40px" ,"marginLeft":"10px",outline:"none"}} type="text" placeholder='find students....' />
            
            
           <Button variant="contained" style={{backgroundColor:"purple"}} ><Link to="/admin/addstudents">add students</Link> </Button>
           </div>
   
    
    <TableContainer style={{"backgroundColor":"white",zIndex:"-100"}}>
    <Table>
    <TableHead>


      </TableHead>
    
    <TableHead >
   
    <TableRow style={{"backgroundColor":"green"}}>
    <TableCell style={styles}> SN</TableCell>
    <TableCell style={styles}>profile</TableCell>
    <TableCell style={styles}>Studentname</TableCell>
    <TableCell style={styles}>Roll.no</TableCell>
     <TableCell style={styles}>Parents Name</TableCell>
    <TableCell style={styles}>view</TableCell>
    <TableCell style={styles}>edits</TableCell>
    <TableCell style={styles}>delete</TableCell>
   
   
    </TableRow>
  
    
  { users.map((data,index)=>{
   
    return<TableRow key={index} style={{margin:""}}>
    <TableCell >{index+1}</TableCell>
    <TableCell > <div className='simgtablecell shadow-md bg-slate-900'><img src={data.image} alt="" /></div></TableCell>
    <TableCell>{data.studentName}</TableCell>
    <TableCell>{data.RollNumber}</TableCell>
    <TableCell>{data.ParentsName}</TableCell>
    
    <TableCell>
      <Button className='www ' variant="contained" style={{backgroundColor:"blue"}} >view</Button>
    </TableCell>


<TableCell>
 <Button variant="contained" style={{backgroundColor:"green"}} >Edit</Button>
</TableCell>
   
<TableCell>
<Button variant="contained" style={{zIndex:100,backgroundColor:"red"}}
>Delete</Button>
</TableCell>
    
    
    
   
      
    </TableRow>
  
    
   })
   }
  
  

  

    </TableHead>
    
    </Table>
    
   
    </TableContainer>
    
    
    </div>

 
  
  )
  
}

export default  TAStudents












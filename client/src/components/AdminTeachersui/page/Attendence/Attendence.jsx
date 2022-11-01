
 import React,{useState,useEffect} from 'react'
import {TableContainer,Table,TableHead,TableRow,TableCell,Button} from "@mui/material"

import "./Attendence.css"
import api from '../../../service/api'
import {Link, useNavigate } from "react-router-dom"

import { useSelector} from 'react-redux';
 import swal from 'sweetalert';
import { Children } from 'react'


 let  todydate= new Date().toLocaleString().split(',')[0];

const Attendence = () => {

//redux
  const {classTeacherOf,ttoken} = useSelector((state) => state.teacher.currentUser
);

  const navigate=useNavigate();
  
 const[users,setusers]=useState([])




//  const [Attendence,setAttendence]=useState(false)
//  console.log(Attendence)


 //to set todaysttendence done or not
 const [todayAttendence,settodayAttendence]=useState(false)
 console.log(todayAttendence)

 //to make attendence reports
const [Status, setStatus] = useState('')

 



// get the stuudents to make atttendence
 useEffect(() => {
  const getuser=async()=>{
      try{
       const response=await api.get(`/teacheradmin/students?semq=${classTeacherOf}`,{
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



//  attendence/attendencedone-not
 useEffect(() => {
  const todatattendentdoneornot=async()=>{
    
      try{
       const response=await api.get(`attendence/attendencedone-not?semq=${classTeacherOf}`,{
          headers:{         
            "Content-Type": "multipart/form-data",
            ttoken:ttoken,
          },
       })
       //to set todaysttendence done or not
       settodayAttendence(response.data.sucess)    
       console.log(response.data.sucess)

       
      }catch(e){
          console.log("error while get data",e)
      }
     }
 todatattendentdoneornot()
 }, [])



 // make ateendence 
 //main concepts of projects
 const ateendence=async (data,attendence)=>{

  try{
 const response =await api.post("/attendence/attendence",{
  Students:data._id,
  Sname:data.studentName,
  RollNumber:data.RollNumber,
  Attend:attendence,
  Date: todydate,
   Semester:data.Semester

  
  
 })
 

console.log(response.data.status)

setStatus(response.data.status)


  }catch(err){
  console.log(err)
  }
 }


  const styles={
  size:"30px",
  backgroundColor:"whiteSmoke",
  padding:"30px 10px",
 }
 

const handlesunmot=(e)=>{
 e.preventDefault();
}
  return (
    <div>
    <header className='bg-[#cad3e4]  h-16 flex   text-xl font-bold capitalize  text-[#292929] items-center justify-center mb-1'>
      <h1>{`mark Attendence ${todydate}`}</h1>
    </header>

      <div className='bg-[#f3f4f6]  h-16 flex  items-center justify-center mb-1'>
     {todayAttendence?<span className='p-3 text-[#0d6de3] text-xl  rounded-md  bg-[#06f612]'>toady attendence is allready done</span>:<span className='p-3  text-[white] rounded-md  bg-[#f60303]'>make attendrt for today</span>}
      </div>

    
    {/* <form> */}
    <form  onSubmit={()=>handlesunmot()}>
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
    <TableCell style={styles}>Date</TableCell>
     <TableCell style={styles}>Status</TableCell>

    </TableRow>


  { users.map((data,index)=>{
    let  date= new Date().toLocaleString().split(',')[0];
    //"2/18/2016"
    return<TableRow key={index} style={{margin:""}}>
    <TableCell >{index+1}</TableCell>
    <TableCell > <div className='simgtablecell shadow-md bg-slate-900'><img src={data.image} alt="" /></div></TableCell>
    <TableCell>{data.studentName}</TableCell>
    <TableCell>{data.RollNumber}</TableCell>
     <TableCell>{todydate}</TableCell>
     <TableCell >
     <div className="statussss flex cursor-pointer">

    
         {!todayAttendence? <button className='bg-[#007618] mx-1 p-4 text-[white] rounded-sm' onClick={()=>ateendence(data, true )}>p</button>:Status?<button>present</button>:<button>absent</button>
         }
    
           {
            !todayAttendence?
            <button className='bg-[#fb0303] mx-1 p-4 text-[white] rounded-sm' onClick={()=>ateendence(data, false)}>A</button>:!Status?<button>present</button>:<button>absent</button>
           }


     </div>
   
  
     </TableCell>  
    </TableRow>
   })
   }
    </TableHead>
    </Table>
    </TableContainer>
    </form>
  
  
    </div>
  )
  
}

export default Attendence












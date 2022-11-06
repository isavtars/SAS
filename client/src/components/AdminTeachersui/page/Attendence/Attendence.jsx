
 import React,{useState,useEffect} from 'react'
import {TableContainer,Table,TableHead,TableRow,TableCell,Button} from "@mui/material"

import "./Attendence.css"
import api from '../../../service/api'
import {Link, useNavigate } from "react-router-dom"

import { useSelector} from 'react-redux';
 import swal from 'sweetalert';
import { Children } from 'react'
import { GiCogLock } from 'react-icons/gi';


 let  todydate= new Date().toLocaleString().split(',')[0];

const Attendence = () => {

//redux
  const {classTeacherOf,ttoken} = useSelector((state) => state.teacher.currentUser
);

  const navigate=useNavigate();
  





 //to set todaysttendence done or not
 const [todayAttendence,settodayAttendence]=useState(false)
 console.log(todayAttendence)

 //to make attendence reports
const [Status, setStatus] = useState(false)
console.log(Status)

 



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





  const styles={
  size:"30px",
  backgroundColor:"whiteSmoke",
  padding:"30px 10px",
 }
 

//selectbox


 const[users,setusers]=useState([])

  const handleChange = (e) => {
    const { name, checked } = e.target;
    console.log(name,checked)
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setusers(tempUser);
    } else {

      let temusers= users.map((user)=>{
       console.log(user.studentName)
      return user.studentName === name ?{...user, isChecked:checked}:user
      
    })
 setusers(temusers);

    }


   
  };

 console.log(users)
  
 // make ateendence 
 //main concepts of projects
 const ateendence=async(e)=>{
  console.log(users)
  e.preventDefault();
  try{

    users.map(async (data,index)=>{
const response = await api.post("/attendence/attendence",{
  Students:data._id,
  Sname:data.studentName,
  RollNumber:data.RollNumber,
  Date: todydate,
   Semester:data.Semester,
   Attend:data.isChecked,

 })

       console.log(response.data)
setStatus(response.data.sucess)
    })
   

 
  }catch(err){
  console.log(err)
  }
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
    <form  onSubmit={ateendence}>
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
     <TableCell style={styles}>
     <div className="form-check">
     

     {!todayAttendence?
          <input
            type="checkbox"
            className="form-check-input"
            name="allSelect"
            checked={!users.some((user) => user?.isChecked !== true)}
            onChange={handleChange}
          />:<button className='bg-[#0376d3] p-2 text-[white] rounded-md' >ajako bhayo</button>
     }
     
          <label className="form-check-label ms-2">{!todayAttendence?"Attendence Allselects":""}</label>
        </div>
</TableCell>
    </TableRow>


  { users.map((data,index)=>{
    let  date= new Date().toLocaleString().split(',')[0];
    console.log(data.isChecked
)
    return<TableRow key={index} style={{margin:""}}>
    <TableCell >{index+1}</TableCell>
    <TableCell > <div className='simgtablecell shadow-md bg-slate-900'><img src={data.image} alt="" /></div></TableCell>
    <TableCell>{data.studentName}</TableCell>
    <TableCell>{data.RollNumber}</TableCell>
     <TableCell>{todydate}</TableCell>
     <TableCell >
     <div className="statussss flex cursor-pointer">
          <div className="form-check" key={index}>
          {
            !todayAttendence ?
           
            <input
              type="checkbox"
              className="form-check-input"
              name={data.studentName}
              checked={data?.isChecked || false}
              onChange={handleChange}
              value={data.StudentsName}
            />:Status?<button className='bg-green-500 p-3 text-[white] rounded-sm '>present</button>:<button className='bg-[red] p-3 text-white rounded-sm '>absent</button>
          }
            
            <span className=" mx-2 form-check-label ms-2">{
              todayAttendence ?"":
              data.isChecked?<button className='bg-green-500 p-3 text-[white] rounded-sm '>present</button>:<button className='bg-[red] p-3 text-white rounded-sm '>absent</button>}</span>
</div>

     </div>

    
   
  
     </TableCell>  
    </TableRow>

    

    

    
   })
   }
    </TableHead>
    </Table>
   
    </TableContainer>

   <div className="submitbtn  flex justify-center items-center px-5 mx-2 cursor-pointer bg-[#df3cf5] text-white h-10">

    <input type="submit"  disabled={todayAttendence}/>
    </div>
    </form>

    </div>
  )
  
}


export default Attendence












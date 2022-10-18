import React from 'react'
import fore from "../../images/fof.png"
import { Button } from "@mui/material";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const Home404 = () => {
  return (
    <div className='sd bg-[white]'>

     <div className="imgfof bg-[white] h-[80vh] w-[100vw]">
        <img src={fore} alt=""  className='ss h-[100%] w-[100%] object-contain'/>
        
     </div>
     <div className="bton  flex justify-center items-center">
    
    <Link to="/">

    
<Button variant='contained'  className='bg-[#b407e9]'>Go to Home ----</Button>
</Link>
     </div>
     
    </div>
  )
}

export default Home404
import React from 'react'
import "./Adminnavbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

import profileimg from "../../.././../images/a.png"




import { useSelector } from 'react-redux';

const Adminnavbar = () => {

 
    
  const admin = useSelector((state) => state.user.currentUser);
     console.log(admin)

     const proiamge= 'http://localhost:8000/uploads/'+admin.image ;

    
  return (
    <div>

       <div className="anavbar ">
      <div className="wrapper">
      <div className="log">
      <h1 className='text-white text-2xl'>
        SAS
      </h1>
      </div>

      <div className="middleN">
        
        
      </div>
        
        <div className="items">
         
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              // onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
         
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>

         

          <div className="item">
            <img
              src={admin.image?proiamge:profileimg}
              alt=""
              className="avatar bg-[#181717]"
            />

            <div className="adminname">
              <span className='text-white text-xl cursor-pointer'>{admin?admin.Name:""}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Adminnavbar
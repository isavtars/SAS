import api from "../../src/components/service/api"
import  swal  from 'sweetalert';

//heare the all appi calle of teachesr admin



import {

     tloginStart, tloginSuccess, tloginFailure, tlogout  
    } from "./userTeacherRedux";

//login appi calls
export const  tlogin=async(dispatch,user,e,nagavation)=>{
    
    try{

        const response=await api.post('teacheradmin/login',{...user})
        console.log(response.data)
        if(response.data.ttoken){
            e.target.reset();
        dispatch(tloginSuccess(response.data))
         nagavation("/tadmin")
       
  swal({
  title: "sucess to login",
  text:"teachear adding suceess",
  icon: "success",
 
})
        
}

    }catch(err){
        console.log(err)
    }



}
import adminregistermodels from "../database/models/adminmodels.js"
import studentModel from "../database/models/students.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config"
// import"dotenv/config";


class AdminController{

  //admin register
 async userreg(req,res){
    try{
       
       const pass=await bcrypt.hash(req.body.Password,10);
     const data=new adminregistermodels({...req.body,Password:pass})
     const result= await data.save();
     res.json(result)
    
    }catch(e){
        res.status(404).json({message:e.message,success:false})
        console.log(e)
    }
  }


  //adminlogin
 async userlog(req,res){
try{
const email=req.body.Email;
const passw=req.body.Password;
 
console.log(passw)
const response= await  adminregistermodels.findOne({Email:email})
if(response === null){
                res.send([])
            }else{

const  matching=bcrypt.compareSync(passw,response.Password)
console.log(matching)
if (matching){
  //jwt
  const token= jwt.sign({id:response._id,isAdmin:response.isAdmin,Name:response.Namer,Email:response.Email,},process.env.JWT_SECRET,{
    expiresIn:"7d",
  })
  res.json({
    id:response._id,
    Name:response.Name,
    Email:response.Email,
    sucess:true,
    isAdmin:response.isAdmin,
    token,
  })
  console.log(response)

  
}else{
  res.json("loggin failled")
}
            }
}catch(e){
    res.status(404).json({message:e.message,success:false,stack:e.stack})
}
 }


 //addstudents
 //make diffrents routes

 async addstudents(req,res){
  try{
  if(req.user.isAdmin){
     
    const data = new studentModel({...req.body})
    const response= await data.save();
    res.json(response)

  }else{
     res.send("you are not admin")
  }
 }catch(err){
  res.send(err)
 }
 }

 //getstudents
 async getstudents(req,res){
  try{
    if(req.user.isAdmin){
      
      const response= await studentModel.find();
      res.send( response);
    }else{
          res.send("you are not admin") 
    }
  }catch(err){
    res.send(err)
  }
 }


}

export default AdminController;

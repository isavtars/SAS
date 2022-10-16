
import registermodel from "../database/models/adminmodels.js";
import teachersmodels from "../database/models/teachers.js"

import bcrypt  from "bcrypt"


//this is the controoller fom the admin to teachersworks


export default class Detailscontroller{



  //addteachers
 async Teachersadding(req,res,imageName){

  try{
            const myplainpassword = req.body.TPassword;
            const bypassword=await bcrypt.hash(myplainpassword,10)

      const response= new teachersmodels({...req.body,image:imageName,TPassword:bypassword});
            const data = await response.save();
            res.json(data)

     
  }catch(err){

    res.send(err)
  }

}


 //gettteachers
 async getuser(req,res){
    try{
  const response= await teachersmodels.find();

  for (let d of response){
                //host in the sever locally
                d.image="http://localhost:8000/uploads/" + d.image;
            }

  res.status(200).json({success:true,response})


    }catch(e){
   console.log(e)
   res.status(500).json({message:e.message,success:false,stack:e.stack})
    }
  }
//delete
async deluser(req,res){
  const id=req.params.id;
  try{
   
   const response= await teachersmodels.findOneAndDelete({_id:id})
   res.status(200).json({success:true})
  
  }catch(e){
    console.log(e)
    res.status(500).json({message:e.message,stack:e.stack})
  }
}
//find by id
async findTeacherbyId(req,res){
  const id=req.params.id
  try{
   const response=await teachersmodels.findById(id)
 
  // for (let d of   Object.keys(response)){
  //               //host in the sever locally
  //               d.image="http://localhost:8000/uploads/" + d.image;
  //           }
   res.status(200).json(response)
  }catch(e){

    res.status(500).json({success:false,message:e.message,stack:e.stack})
  }
}


//updateuser
async updateuser(req,res,imageName){
  const id=req.params.id
  const update={...req.body,image:imageName}
  const opts={new:true}
  try{
  const response= await teachersmodels.findOneAndUpdate({_id:id},update,opts)
  
  res.json(response)
  }catch(e){
    res.status(500).json({success:false,stack:e.stack})
  }
}



//serch filter

async searchuser(req,res){
  const {search}=req.query;
  try{

    if(search)  
    {
    const data=await teachersmodels.find({$or:[{TeacherName:search},{Email:search}]});
    
  for (let d of data){
                //host in the sever locally
                d.image="http://localhost:8000/uploads/" + d.image;
            }
    res.json(data)
    }else{
      res.json("there is no serch")
    }
    

  }
  catch(err){
    res.json({stack:err.stack})
console.log(search)

  }

}

}
import mongoose from "mongoose"
const adminschema=new mongoose.Schema({
    Email:{
        type:String,
        required:true,
        
    },
    Password:{
     minlength:8,
     required:true,
     type:String,
    },
  
})
const adminmodel=new mongoose.model("adminlogin",adminschema)
export default adminmodel;
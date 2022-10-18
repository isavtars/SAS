import mongoose from "mongoose";

const adminregisterSchema=new mongoose.Schema({
    Name:{
        required:true,
        type:String,

    },
    
    Email:{
        required:true,
        type:String,
       
        
    },
    Password:{
        required:true,
        type:String,
        
       
},
Phone:{
    required:true,
    type:Number,
    minLength:10,
},

isAdmin:{

    type:Boolean,
    require:true,
    default:false,

},

image:{
    type:String,
}
    
    

})
const adminregistermodels=new mongoose.model("adminmodels",adminregisterSchema)
export default adminregistermodels;
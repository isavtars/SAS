import mongoose from "mongoose";

const register=new mongoose.Schema({
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
        minLength:8,
       
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

}

    
    

})
const registermodel=new mongoose.model("userregister",register)
export default registermodel;
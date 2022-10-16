import mongoose, { now } from "mongoose";
import validator from "validator"




//strong validate require
const teachersSchema= new mongoose.Schema({

    TeacherName:{
        type:String,
         required:true,

    },

    Email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("email isnot valid")
            }
        }
    },

    TPassword:{
          type:String,
         required:true,
         default:'teacher123456'
    },

    Phone:{
        type:Number,
        required:true,

    },
    
    Address:{
        type:String,
        required:true,
      
    },
    Qulification:{
        type:String,
        required:true,
    },
    Doj:{
        type: Date,
        default :Date.now,
          required:true,
    },

    GRADE:{
          type:String,
           required:true,
    },
    image:{
        type:String
    }

      

},{ timestamps: true }
)


const teachersmodels= new mongoose.model("teachers",teachersSchema);

export default teachersmodels;
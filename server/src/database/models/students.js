import mongoose from "mongoose";


const studentsSchema= new mongoose.Schema({

    studentName:{
        type:String,
         required:true,

    },
    RollNumber:{
        type:Number,
        required:true,
        unique:true,
    },
    ParentsName:{
        type:String,
        required:true,     
    },

    Address:{
        type:String,
        required:true,   
    },
    DOB:{
        type: Date,
        default:Date.now,
          required:true,
    },

    Phonenumber:{
        type:Number,
        required:true,
        
    },
    Course:{
          type:String,
          required:true,
    },

    Semester:{
          type:String,
          required:true,
    },

    Branch:{
          type:String,
          required:true,
    },



    image:{
        type:String
    }

      

},{ timestamps: true }
)


const studentModel= new mongoose.model("student",studentsSchema);

export default studentModel;
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
    DOB:{
        type: Date,
          required:true,
    },

    GRADE:{
          type:String,
    },
    image:{
        type:String
    }

      

},{ timestamps: true }
)


const studentModel= new mongoose.model("student",studentsSchema);

export default studentModel;
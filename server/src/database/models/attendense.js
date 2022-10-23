import mongoose from "mongoose"
const atttSchema=new mongoose.Schema({

    Students: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
    
    Sname:{
     type:String,
     required:true,
    },


    RollNumber:{
        type:Number,
        required:true,
        
    },
    

    Date: { type: Date,
         default: Date.now
        
        },

        Semester:{
      type:String,
     required:true,
        },

    Attend:{
        type:Boolean,
        required:true,
       },
  
})
const attendenceModel=new mongoose.model("attt",atttSchema)
export default attendenceModel;

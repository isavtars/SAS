
import mongoose from "mongoose"
const connection = () => {mongoose.connect("mongodb://localhost:27017/attandancesystem",{

    }).then(()=>{
    console.log("connection successfully")}).catch((err)=>{
    console.log(err)
    })
  
}

export default connection;
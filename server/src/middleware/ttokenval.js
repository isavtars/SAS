
import jwt from "jsonwebtoken"
import "dotenv/config"


const teachervalid= (req,res,next)=>{
  
        const ttoken = req.headers.ttoken;
        if(ttoken){
            try{
             jwt.verify(ttoken,process.env.JWT_SECRET_TEACHER,(err,user)=>{
                if(err) res.status(403).send("teachertoken not valid");             
              req.user=user;//decode the token
              next();

                
            })
           


        
    }catch(err){

        res.status(403).send(err)
    }

        }else{
            res.status(403).send("teacher token not provided"); 
        


        }
}

export default teachervalid
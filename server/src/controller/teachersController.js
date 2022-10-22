import teachersmodels from "../database/models/teachers.js"
import tokenModel from "../database/models/tokenModel.js"
// import sendEmail from "../utils/sendEmail.js"
import  nodemailer from "nodemailer"
import  bcrypt  from 'bcrypt';
import jwt from "jsonwebtoken";
import studentModel from "../database/models/students.js"

import "dotenv/config"

class TecherAdminController{


    //teachetlogin
    async teacherlogin(req,res){

        const email=req.body.Email;
        const Password=req.body.Password;
        try{
            const response= await teachersmodels.findOne({Email:email})
            if(response === null){
                res.send([])
            }else{           
                const matching= bcrypt.compareSync(Password,response.TPassword)
                if(matching){
                //jwt
                 const ttoken= jwt.sign({id:response._id,Name:response.TeacherName,Email:response.Email,classTeacherOf:response.classTeacherOf},process.env.JWT_SECRET_TEACHER,{
    expiresIn:"7d",
  })
            // res.send({sucess:true,message:"login faiiled"})
            res.json({
                id:response._id,
                Name:response.TeacherName,
                Email:response.Email,
                classTeacherOf:response.classTeacherOf,
                image:response.image,
                ttoken
            })

           
                }else{
                    res.send({sucess:false,message:"login faiiled"})
                }

              
                
            }

             
        }catch(err){
            res.send(err)
        }
    }

    //passwordreset
    async passwordresetww(req,res){
     
        const email=req.body.Email;
      

  try {
    const oldUser = await teachersmodels.findOne({Email:email});
    console.log(oldUser)
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = process.env.JWT_SECRET + oldUser.TPassword;

    //add
    if(secret){
    const token = jwt.sign({ email: oldUser.Email, id: oldUser._id }, secret, {
      expiresIn: "2m",
    });
    const link = `http://localhost:3000/forget-passwordreset/${oldUser._id}/${token}`;
    var transporter = nodemailer.createTransport({
      service: "gmail",
     
      auth: {
        user: "isavatar0977@gmail.com",
        pass: "qfrtidxlbdjocuxp",
      },
     
    });

    var mailOptions = {
      from: "isavatar0977@gmail.com",
      to: "bibchhetri5678@gmail.com",
      subject: "Password Reset",
      text: link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    console.log(link);
    res.send({link,sucess:true,message:"email verifactions successfull"})
  }else{
  
     res.send({sucess:false,message:"email verifactions failled"})
  }
    
  } catch (error) {
    res.send(err)
  }
      
    }


    async resetpassword(req,res){
         const { id, token } = req.params;
  const  password  = req.body.Password;
 

  const oldUser = await teachersmodels.findOne({ _id: id });
  if (!oldUser) 
    return res.json({ status: "User Not Exists!!" });
  
  const secret = process.env.JWT_SECRET + oldUser.TPassword;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await teachersmodels.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          TPassword: encryptedPassword,
        },
      }
    );
     res.send({ status: "verified" });

    } catch (error) {
    console.log(error);
    res.json({ status: "Something Went Wrong" });
  }

    }

    //getresetpassword
    async getresetpassword(req,res){
         const { id, token } = req.params;
 
 
  const oldUser = await teachersmodels.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret =process.env.JWT_SECRET + oldUser.TPassword;
  try {
    const verify = jwt.verify(token, secret);
    res.send("verrifieds");
  } catch (error) {
    console.log(error);
    res.send("Not Verified");
  }

    }

 
    //getstudentsbusemester for teacheradmin
    async getstudentsbusemester(req,res){
      
      const semq =req.query.semq;
      
      try{
      


        if(semq==req.user.classTeacherOf){
        const response = await studentModel.find({$or:[{Semester:semq}]})
         
  for (let d of response){
                //host in the sever locally
                d.image="http://localhost:8000/uploads/" + d.image;
            }
    
        res.send(response)
        }else{
           res.send({sucess:false,message:"you are not valid teachers"})
        }

      }catch(err){
        res.send(err)
      }
    }

}


export default TecherAdminController;
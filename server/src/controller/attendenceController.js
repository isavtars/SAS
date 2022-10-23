import  attendenceModel from "../database/models/attendense.js"


class AttendenceController{

//markattendence
async markattendence(req,res){
    try{
let  todaydate= new Date().toLocaleString().split(',')[0];
        let date = req.body.Date;
        // console.log(todaydate)

        if(todaydate==date){
   
    const response =  new attendenceModel({...req.body})
    const data =await  response.save();
    if(data.Attend){
    res.send({data,status:"present",sucess:true,message:"tody you are present"})
    }else{
          res.send({data,status:"absent",sucess:false,message:"toady you are absent"})
    }
}else{
    res.send({data,message:"confirm today date"})
}
    }catch(err){
        res.send(err)
    }
}


//view all date of attendencereport form class teachers
async viewattendencereport(req,res){
    try{
       
        const semq =req.query.semq;

        const response = await attendenceModel.find({$and:[{Semester:semq}]});
        res.send(response)

    }catch(err){
        res.send(err)
    }
}

//attendedoneornot to the teacher only
async attendedoneornot(req,res){
    try{
         const semq =req.query.semq;
let  todaydate= new Date().toLocaleString().split(',')[0];
        const response = await attendenceModel.find({$and:[{Date:todaydate},{Semester:semq}]})
        console.log(response)
        
        if(response==""){
              res.send({response,sucess:false,message:"today attendnt not done"})
        }else{
            
             res.send({response,sucess:true,message:"today attendents done"})
        }
           
        // res.send(response)
       


        

    }catch(err){

    }
}

}

export default AttendenceController;
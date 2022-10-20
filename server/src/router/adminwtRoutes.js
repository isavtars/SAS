import express from "express"
import Detailscontroller from "../controller/adminwtcontroller.js"
const router=express.Router();
const detailscontroller=new Detailscontroller();
import Validate  from "../middleware/tokenval.js";


import multer from 'multer';

let imageName;

  //image sender to the data base and and it store locally
  //multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/uploads/");
    },
    filename: function (req, file, cb) {
      imageName =
        Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        "-" +
        file.originalname.trim();
      cb(null, imageName);
    },
  });
  
    //storage: storage = storage destructuring
  const upload = multer({ storage: storage })  

// routes for the  adminworkfor the teachers
router.get("/all",Validate,detailscontroller.getuser)


//registerteachers from users
router.post("/addteachers",Validate,upload.single("image"),(req,res) =>
{
    detailscontroller.Teachersadding(req,res,imageName)
}
)



router.delete("/del/:id",Validate,detailscontroller.deluser)


//router for serch filter
router.get("/searchfilter",Validate,detailscontroller.searchuser)


router.get("/findteachers/:id",Validate,detailscontroller.findTeacherbyId)




//updatre and edits the teachers
router.patch("/update/:id",Validate,upload.single("image"),(req,res) =>
{
   detailscontroller.updateuser(req,res,imageName)
}
)



//routes for the adminn works on students


//route for add students
router.post("/addstudents",Validate,upload.single("image"),(req,res) =>
{
   detailscontroller.addingStudents(req,res,imageName)
})


//getsstudents
router.get("/getstudents",detailscontroller.getsstudents)


//router for students serch filter
router.get("/studentssearchfilter",Validate,detailscontroller.studentssearchilter)



export default router;

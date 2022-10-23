import  express  from "express";
import AttendenceController from "../controller/attendenceController.js"
const router = express.Router();

import teachervalid from "../middleware/ttokenval.js"

const attendenceController= new AttendenceController();


//markattendence 
router.post("/attendence",attendenceController.markattendence)


//getattendent repoer by teacher
router.get("/viewattendence",teachervalid,attendenceController.viewattendencereport)

//to checked alltendent allready done or not
router.get("/attendencedone-not",attendenceController.attendedoneornot)





export default router;
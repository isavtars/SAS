import express from "express"
const router=express.Router();
import TecherAdminController from "../controller/teachersController.js"
const tac=new TecherAdminController();


import teachervalid from "../middleware/ttokenval.js"
//this is the router wheare teachers works as an admin


//teacher logins
router.post("/login",tac.teacherlogin)

//passwordresert router
router.post("/passwordreset",tac.passwordresetww)

// //resetrutes
router.post("/reset-password/:id/:token",tac.resetpassword)

router.get("/reset-password/:id/:token",tac.getresetpassword)


//get the students of eachteacher from teacher admin

router.get("/students",teachervalid,tac.getstudentsbusemester)


export default router;
import express from "express"
const router=express.Router();
import TecherAdminController from "../controller/teachersController.js"
const tac=new TecherAdminController();

//this is the router wheare teachers works as an admin


//teacher logins
router.post("/login",tac.teacherlogin)

//passwordresert router
router.post("/passwordreset",tac.passwordresetww)

// //resetrutes
router.post("/reset-password/:id/:token",tac.resetpassword)

router.get("/reset-password/:id/:token",tac.getresetpassword)


export default router;
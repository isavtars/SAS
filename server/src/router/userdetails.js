import express from "express"
import Detailscontroller from "../controller/userdetails.js"
const router=express.Router();
const detailscontroller=new Detailscontroller();



router.get("/all",detailscontroller.getuser)

router.delete("/del/:id",detailscontroller.deluser)


//router for serch filter
router.get("/searchfilter",detailscontroller.searchuser)


router.get("/edit/:id",detailscontroller.edituser)
router.patch("/update/:id",detailscontroller.updateuser)

export default router;

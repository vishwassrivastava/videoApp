import express from "express";
import  {signup,signin, googleAuth} from "../controllers/auth.js";


const router=express.Router();

//create a user
router.post("/signup",signup)


//signin
router.post("/signin",signin)


router.post("/google",googleAuth)
export default router;
import express from "express";
import {
  signin,
  signup,
  googleSignin,
  signout,
} from "../controller/auth.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", signout);
router.post("/google", googleSignin);

export default router;

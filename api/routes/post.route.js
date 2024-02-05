import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { create, getPosts, deletepost } from "../controller/post.controller.js";

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getposts", getPosts);
router.delete("/deletepost/:postId/:userId", verifyToken, deletepost);

export default router;

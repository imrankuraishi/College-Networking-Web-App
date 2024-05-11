import express from "express";
import { deletePost, getAllPosts } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/getAllposts", getAllPosts);
router.delete("/deletepost/:id", deletePost);

export default router;

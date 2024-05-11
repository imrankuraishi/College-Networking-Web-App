import express from "express";
import { addQuery, createClub, deleteQuery, getAllClubs, getAllQuery, getAllUsers, getClub, getQuery, getUser, joinclub, updateClub, updateQuery, updateUser } from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Users
router.get("/getAlluser", verifyToken, getAllUsers);
router.get("/getuser/:id", verifyToken, getUser);
router.put("/updateuser/:id", verifyToken, updateUser);

// Club
router.post("/addclub", verifyToken, createClub);
router.get("/getAllClubs/", verifyToken, getAllClubs);
router.get("/getClub/:id", verifyToken, getClub);
// router.put("/updateclub/:id", verifyToken, updateClub);
router.post("/joinclub/:id", verifyToken, joinclub)

// Query
router.post("/addquery", verifyToken, addQuery);
router.get("/getAllquerys/", verifyToken, getAllQuery);
router.get("/getquery/:id", verifyToken, getQuery);
router.put("/updatequery/:id", verifyToken, updateQuery);
router.delete("/deletequery/:id", verifyToken, deleteQuery);



export default router;

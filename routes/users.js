import express from "express";
import { addUser, users } from "../controllers/user.js";
const router = express.Router()

router.get('/add', addUser)
router.get("/", users)

export default router;
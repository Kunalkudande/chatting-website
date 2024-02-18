import express from "express";
import sendMessage from "../controller/messageController.js";
import { getMessage } from "../controller/messageController.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessage)
router.post("/send/:id", protectRoute, sendMessage)

export default router;
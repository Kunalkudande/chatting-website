import express from "express";
import { getMessage } from "../controller/messageController.js";
import { sendMessage } from "../controller/messageController.js";
import protectRoute from "../middlewares/protectRoute.js"

const router = express.Router();

router.get("/:id", protectRoute, getMessage)
router.post("/send/:id", protectRoute, sendMessage)

export default router;
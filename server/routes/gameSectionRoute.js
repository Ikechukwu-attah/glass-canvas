import express from "express";
import {
  createGameSection,
  getGameSessions,
} from "../controllers/gameSectionController.js";

const router = express.Router();

router.post("/", createGameSection);
router.get("/", getGameSessions);

export default router;

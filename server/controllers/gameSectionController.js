import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const prisma = new PrismaClient();

export const createGameSection = async (req, res) => {
  const { robotPosition, targetPosition, playerId, duration, score } = req.body;
  try {
    // Delete existing game sessions for the player
    await prisma.gameSession.deleteMany({
      where: { playerId },
    });

    // Create a new game session
    const newSession = await prisma.gameSession.create({
      data: {
        robotPosition,
        targetPosition,
        duration,
        score,
        player: playerId ? { connect: { id: playerId } } : undefined,
      },
    });

    res.status(200).json(newSession);
  } catch (error) {
    console.error("Failed to create game session:", error);
    res.status(500).json({ error: "Failed to create game session" });
  }
};

export const getGameSessions = async (req, res) => {
  try {
    const sessions = await prisma.gameSession.findMany();
    res.json(sessions);
  } catch (error) {
    console.error("Failed to retrieve game sessions:", error);
    res.status(500).json({ error: "Failed to retrieve game sessions" });
  }
};

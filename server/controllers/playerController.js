import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
dotenv.config();

const prisma = new PrismaClient();

export const createPlayer = async (req, res) => {
  const { username } = req.body;

  const checkExistingUser = await prisma.player.findUnique({
    where: { username },
  });

  if (checkExistingUser) {
    return res.status(409).json({ message: "Username already in use" });
  }
  try {
    const newPlayer = await prisma.player.create({
      data: { username },
    });

    res.status(200).json(newPlayer);
  } catch (error) {
    console.error("Failed to create player:", error);
    res.status(500).json({ error: "Failed to create player" });
  }
};

export const getPlayers = async (req, res) => {
  try {
    const players = await prisma.player.findMany({ include: { games: true } });
    res.json(players);
  } catch (error) {
    console.error("Failed to retrieve players:", error);
    res.status(500).json({ error: "Failed to retrieve players" });
  }
};

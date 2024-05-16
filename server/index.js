import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";
import dotenv from "dotenv";
import playerRouts from "./routes/playerRoute.js";
import gameSectionRoutes from "./routes/gameSectionRoute.js";

dotenv.config();
const app = express();
app.use(express.json());
console.log("DATABASE_URL:", process.env.DATABASE_URL);
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
const port = process.env.PORT || 5000;

app.use("/players", playerRouts);
app.use("/game-sections", gameSectionRoutes);

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});

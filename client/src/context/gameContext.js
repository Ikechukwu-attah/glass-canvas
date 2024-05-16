// src/context/GameContext.js
import React, { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState({
    position: { x: 2, y: 2 },
    direction: "up",
    target: {
      x: Math.floor(Math.random() * 5),
      y: Math.floor(Math.random() * 5),
    },
    score: 0,
    time: 60,
    gameOver: false,
  });

  return (
    <GameContext.Provider value={[gameState, setGameState]}>
      {" "}
      {children}{" "}
    </GameContext.Provider>
  );
};

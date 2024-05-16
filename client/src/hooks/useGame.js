import { useContext, useEffect, useCallback, useRef } from "react";
import { useCreateGameSession } from "../api/useGameSessionApi";
import { GameContext } from "../context/gameContext";
import { PlayerContext } from "../context/playerContext";

const useGame = () => {
  const [gameState, setGameState] = useContext(GameContext);
  const { createGameSession, data, isLoading, error, reset } =
    useCreateGameSession();
  const { fetchPlayers } = useContext(PlayerContext);
  const gameOverHandled = useRef(false);

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setGameState((prev) => {
        if (prev.time > 0) {
          return { ...prev, time: prev.time - 1 };
        } else if (!prev.gameOver) {
          return { ...prev, gameOver: true, time: 0 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [setGameState]);

  // Save game session when game ends
  useEffect(() => {
    if (
      gameState.gameOver &&
      !gameOverHandled.current &&
      !isLoading &&
      !error
    ) {
      createGameSession({
        robotPosition: JSON.stringify(gameState.position),
        targetPosition: JSON.stringify(gameState.target),
        score: gameState.score,
        duration: 60,
        gameOver: true,
        playerId: gameState.playerId,
      }).then(() => {
        fetchPlayers();
        reset();
        gameOverHandled.current = true;
      });
    }
  }, [
    gameState.gameOver,
    gameState.position,
    gameState.target,
    gameState.score,
    gameState.playerId,
    createGameSession,
    isLoading,
    error,
    fetchPlayers,
    reset,
  ]);

  // Reset game over handled state when game starts
  useEffect(() => {
    if (!gameState.gameOver) {
      gameOverHandled.current = false;
    }
  }, [gameState.gameOver]);

  // Move handler
  const handleMove = useCallback(() => {
    setGameState((prev) => {
      if (prev.gameOver) return prev;

      let newPos = { ...prev.position };
      if (prev.direction === "up") newPos.y -= 1;
      if (prev.direction === "down") newPos.y += 1;
      if (prev.direction === "left") newPos.x -= 1;
      if (prev.direction === "right") newPos.x += 1;

      // Check for out of bounds
      if (newPos.x < 0 || newPos.x >= 5 || newPos.y < 0 || newPos.y >= 5) {
        alert("Game Over! The robot fell off the grid.");
        return { ...prev, gameOver: true, time: 0 };
      }

      return {
        ...prev,
        position: newPos,
        score:
          newPos.x === prev.target.x && newPos.y === prev.target.y
            ? prev.score + 1
            : prev.score,
        target:
          newPos.x === prev.target.x && newPos.y === prev.target.y
            ? {
                x: Math.floor(Math.random() * 5),
                y: Math.floor(Math.random() * 5),
              }
            : prev.target,
      };
    });
  }, [setGameState]);

  // Left turn handler
  const handleLeft = useCallback(() => {
    setGameState((prev) => {
      if (prev.gameOver) return prev;

      const directions = ["up", "left", "down", "right"];
      const currentIndex = directions.indexOf(prev.direction);
      const newDirection = directions[(currentIndex + 1) % 4];
      return { ...prev, direction: newDirection };
    });
  }, [setGameState]);

  // Right turn handler
  const handleRight = useCallback(() => {
    setGameState((prev) => {
      if (prev.gameOver) return prev;

      const directions = ["up", "right", "down", "left"];
      const currentIndex = directions.indexOf(prev.direction);
      const newDirection = directions[(currentIndex + 1) % 4];
      return { ...prev, direction: newDirection };
    });
  }, [setGameState]);

  return {
    gameState,
    setGameState,
    handleMove,
    handleLeft,
    handleRight,
    data,
    isLoading,
    error,
  };
};

export default useGame;

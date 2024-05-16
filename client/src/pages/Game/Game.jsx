import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  TextField,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import useGame from "../../hooks/useGame";
import Leaderboard from "../../components/LeaderBoard/Leaderboard";
import GameGrid from "../../components/GameGrid/GameGrid";
import usePlayer from "../../hooks/usePlayer";
import Timer from "../../components/Timer/Timer";
import Controls from "../../components/Control/Control";

const Game = () => {
  const {
    gameState,
    setGameState,
    handleMove,
    handleLeft,
    handleRight,
    isLoading: gameLoading,
    error: gameError,
  } = useGame();
  const {
    addPlayer,
    newPlayer,
    isLoading: playerLoading,
    error: playerError,
  } = usePlayer();
  const [username, setUsername] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (newPlayer) {
      setGameState((prev) => ({
        ...prev,
        playerId: newPlayer.id, // Set playerId in gameState
      }));
      setGameStarted(true);
    }
  }, [newPlayer, setGameState]);

  const handleStartGame = async () => {
    if (username) {
      await addPlayer(username);
    } else {
      alert("Please enter a username to start the game.");
    }
  };

  const handleRestartGame = () => {
    setGameState((prev) => ({
      ...prev,
      position: { x: 2, y: 2 },
      direction: "up",
      target: {
        x: Math.floor(Math.random() * 5),
        y: Math.floor(Math.random() * 5),
      },
      score: 0,
      time: 60,
      gameOver: false,
    }));
  };

  return (
    <Container mt={"200px"}>
      {!gameStarted ? (
        <Box textAlign="center">
          <Typography variant="h4" gutterBottom>
            Enter your username to start the game
          </Typography>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap="10px"
            justifyContent={"center"}
          >
            <TextField
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant="outlined"
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleStartGame}
            >
              Start Game
            </Button>
          </Box>
          {playerLoading && <CircularProgress />}
          {playerError && (
            <Typography color="error">
              Failed to create player: {playerError.message}
            </Typography>
          )}
        </Box>
      ) : (
        <Box>
          <Box display="flex" justifyContent="space-between" marginBottom={2}>
            <Typography variant="h6">Score: {gameState.score}</Typography>
            <Timer time={gameState.time} />
          </Box>
          <GameGrid
            position={gameState.position}
            direction={gameState.direction}
            target={gameState.target}
          />
          <Controls
            onLeft={handleLeft}
            onRight={handleRight}
            onMove={handleMove}
          />
          {gameState.gameOver && (
            <Box textAlign="center" marginTop={2}>
              <Typography variant="h5">
                Game Over! Your score: {gameState.score}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleRestartGame}
              >
                Restart Game
              </Button>
            </Box>
          )}
          {gameLoading && <CircularProgress />}
          {gameError && (
            <Typography color="error">
              Failed to create game session: {gameError.message}
            </Typography>
          )}
        </Box>
      )}
      <Leaderboard />
    </Container>
  );
};

export default Game;

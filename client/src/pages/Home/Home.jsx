import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate("/game");
  };

  return (
    <Container>
      <Box textAlign="center">
        <Typography variant="h2" gutterBottom>
          Welcome to the Robot Game
        </Typography>
        <Button variant="contained" color="primary" onClick={handleStartGame}>
          Start Game
        </Button>
      </Box>
    </Container>
  );
};

export default Home;

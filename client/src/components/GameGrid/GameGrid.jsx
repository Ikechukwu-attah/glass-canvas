import React from "react";

import { Box } from "@mui/material";
import Robot from "../Robot/Robot";
import Target from "../Target/Target";

const GameGrid = ({ position, direction, target }) => {
  const cellSize = 100; // Size of each grid cell

  return (
    <Box
      sx={{
        position: "relative",
        width: cellSize * 5,
        height: cellSize * 5,
        display: "grid",
        gridTemplateColumns: `repeat(5, ${cellSize}px)`,
        gridTemplateRows: `repeat(5, ${cellSize}px)`,
        border: "2px solid black",
        margin: "0 auto",
      }}
    >
      {[...Array(25)].map((_, index) => (
        <Box
          key={index}
          sx={{
            border: "1px solid gray",
            width: "100%",
            height: "100%",
          }}
        />
      ))}
      <Robot position={position} direction={direction} cellSize={cellSize} />
      <Target position={target} cellSize={cellSize} />
    </Box>
  );
};

export default GameGrid;

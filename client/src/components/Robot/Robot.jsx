import React from "react";
import { Box } from "@mui/material";

const Robot = ({ position, direction, cellSize }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: cellSize,
        height: cellSize,
        backgroundColor: "blue",
        transform: `rotate(${
          direction === "up"
            ? 0
            : direction === "right"
            ? 90
            : direction === "down"
            ? 180
            : direction === "left"
            ? 270
            : 0
        }deg)`,
        transition: "top 0.3s, left 0.3s",
        top: position.y * cellSize,
        left: position.x * cellSize,
      }}
    />
  );
};

export default Robot;

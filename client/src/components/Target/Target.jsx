import React from "react";
import { Box } from "@mui/material";

const Target = ({ position, cellSize }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: cellSize,
        height: cellSize,
        backgroundColor: "red",
        top: position.y * cellSize,
        left: position.x * cellSize,
      }}
    />
  );
};

export default Target;

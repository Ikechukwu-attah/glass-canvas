import React from "react";
import { Box, Button, IconButton } from "@mui/material";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";

const Controls = ({ onLeft, onRight, onMove }) => {
  return (
    <Box sx={{ margin: 2, display: "flex", justifyContent: "center", gap: 2 }}>
      <IconButton variant="contained" color="primary" onClick={onLeft}>
        <RotateLeftIcon sx={{ fontSize: "50px" }} />
      </IconButton>
      <IconButton variant="contained" color="primary" onClick={onMove}>
        <ControlCameraIcon sx={{ fontSize: "50px" }} />
      </IconButton>
      <IconButton variant="contained" color="primary" onClick={onRight}>
        <RotateRightIcon sx={{ fontSize: "50px" }} />
      </IconButton>
    </Box>
  );
};

export default Controls;

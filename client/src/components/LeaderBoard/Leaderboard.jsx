import React, { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";
import { PlayerContext } from "../../context/playerContext";

const Leaderboard = () => {
  const { players, isLoading, error } = useContext(PlayerContext);

  if (isLoading) return <CircularProgress />;
  if (error)
    return (
      <Typography color="error">
        Failed to load players: {error.message}
      </Typography>
    );

  return (
    <Paper sx={{ marginTop: 4 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Leaderboard
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell>Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players && players.length > 0 ? (
            players.map((player) => (
              <TableRow key={player.id}>
                <TableCell>{player.username}</TableCell>
                <TableCell>
                  {player.games && player.games.length > 0
                    ? player.games.reduce(
                        (total, game) => total + game.score,
                        0
                      )
                    : 0}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={2} align="center">
                No players available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Leaderboard;

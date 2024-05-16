import { useContext, useState, useEffect } from "react";
import { PlayerContext } from "../context/playerContext";

const usePlayer = () => {
  const {
    players,
    isLoading: playersLoading,
    error: playersError,
    createPlayer,
    creating,
    createError,
    data,
    fetchPlayers, // Include fetchPlayers from context
  } = useContext(PlayerContext);

  const [newPlayer, setNewPlayer] = useState(null);

  const addPlayer = async (username) => {
    await createPlayer(username);
    if (!createError) {
      fetchPlayers(); // Fetch players to update leaderboard
    }
  };

  useEffect(() => {
    if (!createError && !creating && data) {
      setNewPlayer(data);
    }
  }, [createError, creating, data]);

  return {
    players,
    playersLoading,
    playersError,
    addPlayer,
    newPlayer,
    isLoading: creating,
    error: createError,
  };
};

export default usePlayer;

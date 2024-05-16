import React, { createContext, useEffect } from "react";
import { useCreatePlayer, useFetchPlayers } from "../api/usePlayerAPI";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const { players, isLoading, error, fetchPlayers } = useFetchPlayers();
  const {
    createPlayer,
    data,
    isLoading: creating,
    error: createError,
  } = useCreatePlayer();

  return (
    <PlayerContext.Provider
      value={{
        players,
        isLoading,
        error,
        createPlayer,
        creating,
        createError,
        data,
        fetchPlayers,
      }}
    >
      {children}{" "}
    </PlayerContext.Provider>
  );
};

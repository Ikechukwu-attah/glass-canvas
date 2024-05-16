import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:4000";

export const useCreateGameSession = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createGameSession = async (gameSession) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `${API_URL}/game-sections`,
        gameSession
      );
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setIsLoading(false);
    setError(null);
  };

  return { createGameSession, data, isLoading, error, reset };
};

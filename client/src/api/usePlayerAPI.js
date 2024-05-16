import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:4000";

export const useCreatePlayer = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createPlayer = async (username) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${API_URL}/players`, { username });
      setData(response.data);
    } catch (err) {
      if (err.response && err.response.status === 409) {
        setError(new Error("Username already in use"));
      } else {
        setError(new Error("Failed to create player"));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { createPlayer, data, isLoading, error };
};

export const useFetchPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPlayers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${API_URL}/players`);
      setPlayers(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return { players, isLoading, error, fetchPlayers };
};

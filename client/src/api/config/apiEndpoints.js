const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const apiEndpoints = {
  createPlayer: `${BASE_URL}/players`,
  getPlayers: `${BASE_URL}/players`,
  createGameSession: `${BASE_URL}/game-sections`,
  getGameSessions: `${BASE_URL}/game-sections`,
};

export default apiEndpoints;

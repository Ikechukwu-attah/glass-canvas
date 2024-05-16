import { RouterProvider } from "react-router-dom";
import { PlayerProvider } from "./context/playerContext";
import { router } from "./routes/routes";
import { GameProvider } from "./context/gameContext";

function App() {
  return (
    <PlayerProvider>
      <GameProvider>
        <RouterProvider router={router} />{" "}
      </GameProvider>{" "}
    </PlayerProvider>
  );
}

export default App;

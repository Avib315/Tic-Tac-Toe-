import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { MainPage } from "./pages/MainPage/mainPage";
import { WelcomePage} from "./pages/WelcomePage/welcomePage";
import { GamePage } from "./pages/GamePage/gamePage";
import { LobbyPage } from "./pages/LobbyPage/lobbyPage";
import { CreateNewGamePage } from "./pages/CreateNewGamePage/createNewGamePage";
import { ChoosePlayerPage } from "./pages/ChoosePlayerPage/choosePlayerPage";
import { WaitingForGame } from "./pages/WatingForGame/waitingForGame";
import { WinningPage } from "./pages/WinningPage/winningPage";
import UserInfoContext, { useUserInfo } from "./Contexts/UserInfoContext";
function App() {
  const { userInfo, updateUserInfo } = useUserInfo();
  return (
    <>
      <div className="App">
        <UserInfoContext.Provider value={{ userInfo, updateUserInfo }}>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/menu" element={<MainPage />} />
            <Route path="/lobby-game" element={<LobbyPage />} />
            <Route path="/choose-player" element={<ChoosePlayerPage />} />
            <Route path="/solo-game" element={<GamePage />} />
            <Route path="/create-game" element={<CreateNewGamePage />} />
            <Route path="/waiting-for-game" element={<WaitingForGame />} />
            <Route path="/winning-game" element={<WinningPage />} />
          </Routes>
        </UserInfoContext.Provider>
      </div>
    </>
  );
}

export default App;

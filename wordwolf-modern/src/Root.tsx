import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import PeopleSetting from "./page/peopleSetting";
import GameSetting from "./page/gameSetting";
import GameWord from "./page/gameWord";
import GameTimer from "./page/gameTimer";
import GameVoting from "./page/gameVoting";
import GameResult from "./page/gameResult";
import PrivacyPolicy from "./page/privacyPolicy";
import HowToPlay from "./page/howToPlay";

import { useNameList, NameListProvider } from "./logic/NameList";
import { useGameSetting, GameSettingProvider } from "./logic/GameSetting";
import NotFound from "./page/404";
import { usePageTracking } from "./hooks/usePageTracking";

const AppWithTracking: React.FC = () => {
  usePageTracking();
  
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/setting/people" element={<PeopleSetting />} />
      <Route path="/setting/game" element={<GameSetting />} />
      <Route path="/game/word" element={<GameWord />} />
      <Route path="/game/talk" element={<GameTimer />} />
      <Route path="/game/vote" element={<GameVoting />} />
      <Route path="/game/result" element={<GameResult />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/how-to-play" element={<HowToPlay />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const Root: React.FC = () => {
  let nameList = useNameList();
  let gameSetting = useGameSetting();

  return (
    <NameListProvider value={nameList}>
      <GameSettingProvider value={gameSetting}>
        <Router>
          <AppWithTracking />
        </Router>
      </GameSettingProvider>
    </NameListProvider>
  );
};

export default Root;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import PeopleSetting from "./page/peopleSetting";
import GameSetting from "./page/gameSetting";
import GameWord from "./page/gameWord";
import GameTimer from "./page/gameTimer";
import GameVoting from "./page/gameVoting";
import GameResult from "./page/gameResult";
import PrivacyPolicy from "./page/privacyPolicy";

import { useNameList, NameListProvider } from "./logic/NameList";
import { useGameSetting, GameSettingProvider } from "./logic/GameSetting";
import NotFound from "./page/404";

const Root: React.FC = () => {
  let nameList = useNameList();
  let gameSetting = useGameSetting();

  return (
    <NameListProvider value={nameList}>
      <GameSettingProvider value={gameSetting}>
        <Router>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/setting/people" component={PeopleSetting} />
            <Route path="/setting/game" component={GameSetting} />
            <Route path="/game/word" component={GameWord} />
            <Route path="/game/talk" component={GameTimer} />
            <Route path="/game/vote" component={GameVoting} />
            <Route path="/game/result" component={GameResult} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </GameSettingProvider>
    </NameListProvider>
  );
};

export default Root;

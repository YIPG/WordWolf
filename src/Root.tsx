import React from "react";
import { Switch, Route } from "wouter";
import App from "./App";
import PeopleSetting from "./page/peopleSetting";
import GameSetting from "./page/gameSetting";
import Game from "./page/game";

import { useNameList, NameListProvider } from "./logic/NameList";
import NotFound from "./page/404";

const Root: React.FC = () => {
  let nameList = useNameList();

  return (
    <NameListProvider value={nameList}>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/setting/people" component={PeopleSetting} />
        <Route path="/setting/game" component={GameSetting} />
        <Route path="/game" component={Game} />
        <Route path="/:rest*" component={NotFound} />
      </Switch>
    </NameListProvider>
  );
};

export default Root;

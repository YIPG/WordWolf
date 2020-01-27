import { useState, useEffect } from "react";
import { createCtx } from "../context";
import { getRand } from "./utils";
import localForage from "localforage";

import { words, wordCategory } from "../assets/words";

type GameSettingState = {
  talkTime: number;
  selectedPlayer: number;
  selectedCategoryIndex: number;
  selectedCategoryName: string;
  player: {
    name: string;
    word: string;
    civil: boolean;
  }[];
};

type ContextProps = {
  gameSetting: GameSettingState;
  setPlayers: (arg: string[]) => void;
  setWolf: (arg: number) => void;
  setWord: () => void;
  resetPlayers: () => void;
  setTalkTime: (arg: number) => void;
  setSelectedPlayer: (arg: number) => void;
  setSelectedCategory: (arg: "up" | "down") => void;
};

export function useGameSetting() {
  const initialState = {
    player: [],
    talkTime: 3,
    selectedPlayer: 0,
    selectedCategoryIndex: 0,
    selectedCategoryName: wordCategory[0]
  };
  const [gameSetting, setGameSetting] = useState<GameSettingState>(
    initialState
  );

  // マウント時にDBをチェック。データが存在するならContextにセット。
  useEffect(() => {
    const getDataIndexedDB = async () => {
      const data: GameSettingState = await localForage.getItem("gameSetting");
      if (data) {
        // console.log("データがDBにあったので、保存するなり");
        setGameSetting(data);
      }
    };
    if (gameSetting === initialState) {
      getDataIndexedDB();
    }
  }, []);

  // player情報に変更があったらIndexedDBにキャッシュする。
  useEffect(() => {
    const setDataToIndexedDB = async () => {
      // console.log("セットしたなり");
      await localForage.setItem("gameSetting", gameSetting);
    };
    setDataToIndexedDB();
  }, [gameSetting.player, gameSetting.selectedPlayer]);

  const resetPlayers = () => {
    // console.log("resetしたなり");
    setGameSetting(initialState);
  };

  const setPlayers = (nameList: string[]) => {
    nameList.forEach(name => {
      setGameSetting(prev => {
        return {
          ...prev,
          player: [
            ...prev.player,
            {
              name,
              word: "",
              civil: true
            }
          ]
        };
      });
    });
  };

  const generateRandNum = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  //ランダムに狼をつくる
  const setWolf = (wolfNum: number) => {
    const uniqueRandNums: number[] = [];
    while (uniqueRandNums.length < wolfNum) {
      let randNum = generateRandNum(0, gameSetting.player.length - 1);
      !uniqueRandNums.includes(randNum) && uniqueRandNums.push(randNum);
    }
    return setGameSetting(prev => {
      return {
        ...prev,
        player: prev.player.map((item, index) => {
          return uniqueRandNums.includes(index)
            ? {
                ...item,
                civil: false
              }
            : item;
        })
      };
    });
  };

  // TODO: カテゴリー追加の場合はここをいじる
  const setWord = () => {
    const wordPair = getRand(words[gameSetting.selectedCategoryName]);
    const zeroOrOne = Math.floor(Math.random() * 2);
    const civilWord = wordPair[zeroOrOne];
    const wolfWord = wordPair[1 - zeroOrOne];
    setGameSetting(prev => {
      return {
        ...prev,
        player: prev.player.map(item =>
          item.civil
            ? {
                ...item,
                word: civilWord
              }
            : {
                ...item,
                word: wolfWord
              }
        )
      };
    });
  };

  const setTalkTime = (time: number) =>
    setGameSetting(prev => {
      return {
        ...prev,
        talkTime: time
      };
    });

  const setSelectedPlayer = (index: number) =>
    setGameSetting(prev => {
      return {
        ...prev,
        selectedPlayer: index
      };
    });

  const setSelectedCategory = (inst: "up" | "down") => {
    if (inst !== "up" && inst !== "down") return;

    const getCategoryIndex = (inst: string, num: number) => {
      if (inst === "up") return (num + 1) % wordCategory.length;

      if (inst === "down") {
        num <= 0 && (num += wordCategory.length);

        return (num - 1) % wordCategory.length;
      }
      return 0;
    };

    setGameSetting(prev => {
      return {
        ...prev,
        selectedCategoryIndex: getCategoryIndex(
          inst,
          prev.selectedCategoryIndex
        ),
        selectedCategoryName:
          wordCategory[getCategoryIndex(inst, prev.selectedCategoryIndex)]
      };
    });
  };

  return {
    gameSetting,
    setPlayers,
    setWolf,
    setWord,
    setTalkTime,
    resetPlayers,
    setSelectedPlayer,
    setSelectedCategory
  } as const;
}

export const [useGameSettingCtx, GameSettingProvider] = createCtx<
  ContextProps
>();

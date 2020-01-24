import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { useNameListCtx } from "../../logic/NameList";
import { useGameSettingCtx } from "../../logic/GameSetting";

const GameSetting: React.FC = () => {
  const { nameList } = useNameListCtx();
  const {
    gameSetting,
    setPlayers,
    setTalkTime,
    setWolf,
    setWord,
    resetPlayers,
    setSelectedCategory
  } = useGameSettingCtx();

  useEffect(() => {
    resetPlayers();
    setPlayers(nameList);
  }, [nameList]);

  const history = useHistory();

  const [wolfNum, setWolfNum] = useState(1);

  const startGame = async () => {
    setWolf(wolfNum);
    setWord();
    history.push("/game/word");
  };

  const categoryTranslate = (category: string) => {
    if (category === "all") return "すべて";
    if (category === "love") return "恋愛";
    if (category === "life") return "生活";
    if (category === "child") return "子供向け";
    if (category === "play") return "遊び";
    return "エラー";
  };

  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl text-green-400 font-bold pt-24">
        ゲーム設定
      </span>
      <span className=" text-lg font-semibold pt-6 pb-3">人数構成</span>
      <div className="w-screen flex flex-row flex-wrap">
        <div className="w-1/2 flex flex-col items-center">
          <span className="font-medium ml-auto pr-12">市民(多数派)</span>
          <div className="w-full flex flex-row items-center justify-end pr-3 -mt-1">
            <span className="text-3xl font-bold">
              {nameList.length - wolfNum}
            </span>
            <span
              className="text-5xl px-6"
              onClick={() => wolfNum > 1 && setWolfNum(wolfNum - 1)}
            >
              <FontAwesomeIcon icon={faCaretLeft} />
            </span>
          </div>
        </div>
        <div className="w-1/2  flex flex-col items-center">
          <span className="font-medium mr-auto pl-12">狼(少数派)</span>
          <div className="w-full flex flex-row items-center justify-start pl-3 -mt-1">
            <span
              className="text-5xl px-6"
              onClick={() =>
                nameList.length - wolfNum * 2 > 2 && setWolfNum(wolfNum + 1)
              }
            >
              <FontAwesomeIcon icon={faCaretRight} />
            </span>
            <span className="text-3xl font-bold">{wolfNum}</span>
          </div>
        </div>
      </div>
      <span className=" text-lg font-semibold pt-4">お題カテゴリー</span>
      <div className="flex flex-row justify-center items-center">
        <span className="text-5xl" onClick={() => setSelectedCategory("down")}>
          <FontAwesomeIcon icon={faCaretLeft} />
        </span>
        <span className="text-3xl font-bold px-16">
          {categoryTranslate(gameSetting.selectedCategoryName)}
        </span>
        <span className="text-5xl" onClick={() => setSelectedCategory("up")}>
          <FontAwesomeIcon icon={faCaretRight} />
        </span>
      </div>
      <span className=" text-lg font-semibold pt-6">トーク時間 (分)</span>
      <div className="flex flex-row justify-center items-center">
        <span
          className="text-5xl"
          onClick={() =>
            gameSetting.talkTime > 1 && setTalkTime(gameSetting.talkTime - 1)
          }
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </span>
        <span className="text-3xl font-bold px-16">{gameSetting.talkTime}</span>
        <span
          className="text-5xl"
          onClick={() =>
            gameSetting.talkTime <= 99 && setTalkTime(gameSetting.talkTime + 1)
          }
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </span>
      </div>
      <button className="btn btn-green mt-12" onClick={() => startGame()}>
        ゲームスタート
      </button>
    </div>
  );
};

export default GameSetting;

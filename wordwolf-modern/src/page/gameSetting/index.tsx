import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { useNameListCtx } from "../../logic/NameList";
import { useGameSettingCtx } from "../../logic/GameSetting";
import Alert from "../../component/Alert";

const GameSetting: React.FC = () => {
  const { nameList } = useNameListCtx();
  const {
    gameSetting,
    setPlayers,
    setTalkTime,
    setWolf,
    setWord,
    resetPlayers,
    setSelectedCategory,
    setWordGM,
    setShowAlert
  } = useGameSettingCtx();

  useEffect(() => {
    resetPlayers();
    setPlayers(nameList);
  }, [nameList]);

  const navigate = useNavigate();

  const [wolfNum, setWolfNum] = useState(1);

  // formilk導入したいよね
  const [civilWord, setCivilWord] = useState("");

  const [wolfWord, setWolfWord] = useState("");

  const [gmSetting, setGmSetting] = useState(false);

  const startGame = async () => {
    setWolf(wolfNum);
    if (gmSetting) {
      if (civilWord === "" || wolfWord === "") {
        setShowAlert(true);
        return;
      } else {
        setWordGM(civilWord, wolfWord);
      }
    } else {
      setWord();
    }
    navigate("/game/word");
  };

  const categoryTranslate = (category: string) => {
    if (category === "all") return "すべて";
    if (category === "food") return "食べ物";
    if (category === "love") return "恋愛";
    if (category === "life") return "生活";
    if (category === "child") return "子供向け";
    if (category === "play") return "遊び";
    return "エラー";
  };

  return (
    <>
      <div className="flex flex-col items-center mb-24">
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
          <span
            className="text-5xl"
            onClick={() => setSelectedCategory("down")}
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </span>
          <span className="text-3xl font-bold px-16">
            {categoryTranslate(gameSetting.selectedCategoryName)}
          </span>
          <span className="text-5xl" onClick={() => setSelectedCategory("up")}>
            <FontAwesomeIcon icon={faCaretRight} />
          </span>
        </div>
        <div className="pt-4 pb-2 flex flex-col items-center">
          <span
            className={
              " text-sm border bg-white rounded " +
              (gmSetting
                ? "border-green-400 font-normal py-1 px-2 shadow-inner"
                : "border-gray-400 font-normal py-1 px-2 shadow")
            }
            onClick={() => setGmSetting(!gmSetting)}
          >
            自分でお題を設定する
          </span>
          {gmSetting && (
            <>
              <input
                name="civil"
                placeholder="市民のお題"
                className="form mb-3 mt-6"
                value={civilWord}
                onChange={e => setCivilWord(e.target.value)}
              />
              <input
                name="wolf"
                placeholder="狼のお題"
                className="form my-3"
                value={wolfWord}
                onChange={e => setWolfWord(e.target.value)}
              />
            </>
          )}
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
          <span className="text-3xl font-bold px-16">
            {gameSetting.talkTime}
          </span>
          <span
            className="text-5xl"
            onClick={() =>
              gameSetting.talkTime <= 99 &&
              setTalkTime(gameSetting.talkTime + 1)
            }
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </span>
        </div>
        <button
          className={
            gmSetting && (civilWord === "" || wolfWord === "")
              ? "btn btn-green opacity-50 cursor-not-allowed mt-12"
              : "btn btn-green mt-12"
          }
          onClick={() => startGame()}
        >
          ゲームスタート
        </button>
      </div>

      {/* Alert */}
      {gameSetting.showAlert && (
        <Alert title="おおっと！" content="ワードを入れてください！" />
      )}
    </>
  );
};

export default GameSetting;

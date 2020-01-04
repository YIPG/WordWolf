import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "wouter";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

const GameSetting: React.FC = () => {
  const [location, setLocation] = useLocation();
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl text-green-400 font-bold pt-24">
        ゲーム設定
      </span>
      <span className=" text-lg font-semibold pt-6 pb-3">人数構成</span>
      {/* 
        TODO: 要素の高さが違っても縦方向中央に揃えたい
        */}
      <div className="w-screen flex flex-row flex-wrap justify-around">
        <div className="w-1/2  flex flex-col items-center">
          <span className="font-medium">市民(多数派)</span>
          <div className="w-full flex flex-row items-center justify-end pr-3 -mt-1">
            <span className="text-3xl font-bold">4</span>
            <span className="text-5xl px-6">
              <FontAwesomeIcon icon={faCaretLeft} />
            </span>
          </div>
        </div>
        <div className="w-1/2  flex flex-col items-center">
          <span className="font-medium">狼(少数派)</span>
          <div className="w-full flex flex-row items-center justify-start pl-3 -mt-1">
            <span className="text-5xl px-6">
              <FontAwesomeIcon icon={faCaretRight} />
            </span>
            <span className="text-3xl font-bold">4</span>
          </div>
        </div>
      </div>
      <span className=" text-lg font-semibold pt-6">トーク時間 (分)</span>
      <div className="flex flex-row justify-center items-center">
        <span className="text-5xl">
          <FontAwesomeIcon icon={faCaretLeft} />
        </span>
        <span className="text-3xl font-bold px-16">3</span>
        <span className="text-5xl">
          <FontAwesomeIcon icon={faCaretRight} />
        </span>
      </div>
      <button
        className="btn btn-green mt-12"
        onClick={() => setLocation("/game")}
      >
        ゲームスタート
      </button>
    </div>
  );
};

export default GameSetting;

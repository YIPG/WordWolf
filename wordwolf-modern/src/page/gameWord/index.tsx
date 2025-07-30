import React, { useState } from "react";
import { useGameSettingCtx } from "../../logic/GameSetting";
import { useNavigate } from "react-router-dom";

const GameWord: React.FC = () => {
  const [user, setUser] = useState(0);
  const [page, setPage] = useState(0);

  const navigate = useNavigate();

  const { gameSetting } = useGameSettingCtx();

  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl text-green-400 font-bold pt-24">お題</span>
      {user < gameSetting.player.length ? (
        <>
          <span className="pt-12 text-xl">
            {gameSetting.player.length > 0
              ? gameSetting.player[user].name
              : `プレイヤー${user + 1}`}
            さんが
          </span>
          <span className="text-xl">この画面を見てください。</span>
          {page === 0 ? (
            <>
              <span className="pt-8 text-xl">お題を表示します。</span>
              <span className="text-xl">他のプレイヤーに</span>
              <span className="text-xl">見られないように</span>
              <span className="text-xl">表示してください。</span>
              <button
                className="btn btn-green"
                onClick={() => setPage(page + 1)}
              >
                表示
              </button>
            </>
          ) : page === 1 ? (
            <>
              <span className="pt-8 text-xl">お題を表示します。</span>
              <span className="text-xl">よろしいですか？</span>
              <button
                className="btn btn-green"
                onClick={() => setPage(page + 1)}
              >
                OK
              </button>
            </>
          ) : page === 2 ? (
            <>
              <span className="pt-8 text-2xl">お題</span>
              <span className="pt-4 text-3xl font-bold">
                {gameSetting.player.length > 0 && gameSetting.player[user].word}
              </span>

              <button
                className="btn btn-green mt-12"
                onClick={() => {
                  setPage(0);
                  setUser(user + 1);
                }}
              >
                覚えた！
              </button>
            </>
          ) : (
            <span>error</span>
          )}{" "}
        </>
      ) : (
        <button
          onClick={() => navigate("/game/talk")}
          className="btn btn-green mt-24 font-semibold text-xl p-5"
        >
          ゲーム開始！
        </button>
      )}
    </div>
  );
};

export default GameWord;

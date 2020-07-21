import React from 'react';
import { useGameSettingCtx } from '../../logic/GameSetting';
import { useHistory } from 'react-router-dom';

import { TwitterShareButton, LineShareButton } from 'react-share';
const { TwitterIcon } = require('react-share');

const GameResult = () => {
  const { gameSetting, setWord } = useGameSettingCtx();
  const history = useHistory();
  const handleNextGame = () => {
    setWord();
    history.push('/game/word');
  };
  const words =
    gameSetting.player.length > 0
      ? [
          gameSetting.player.find((player) => player.civil)?.word,
          gameSetting.player.find((player) => !player.civil)?.word,
        ]
      : ['', ''];

  const wolfWin =
    gameSetting.player.length > 0 && gameSetting.player[gameSetting.selectedPlayer].civil;

  return (
    <div className="flex flex-col items-center mb-32">
      <span className="text-4xl text-green-400 font-bold pt-24">結果発表</span>
      {gameSetting.player.length > 0 && (
        <>
          <span className="pt-6 text-2xl">
            {wolfWin ? 'ウルフ(少数派)' : '市民(多数派)'}
            の勝ち！
          </span>
          <div className="flex flex-col w-3/4 my-10">
            {gameSetting.player.map((player, i) => {
              return (
                <div
                  className="flex flex-col my-3 px-4 py-2 border-gray-400 border-2 rounded-lg"
                  key={i}
                >
                  <span
                    className={
                      'text-2xl font-light ' + (player.civil ? '' : 'text-pink-400 font-normal')
                    }
                  >
                    {player.civil ? '市民' : 'ウルフ'}: {player.name}
                  </span>
                  <span
                    className={
                      'text-2xl font-light ' + (player.civil ? '' : 'text-pink-400 font-normal')
                    }
                  >
                    {`「${player.word}」`}
                  </span>
                </div>
              );
            })}
          </div>
        </>
      )}
      <LineShareButton
        className=""
        title="決定版ワードウルフ (ブラウザ版)"
        url="https://word-wolf.net/"
      >
        <button className="btn btn-line">Lineでシェアする</button>
      </LineShareButton>
      <TwitterShareButton
        className="mb-4"
        title={`決定版ワードウルフ (ブラウザ版): 市民のワード「${words[0]}」、ウルフのワード「${
          words[1]
        }」でした。${wolfWin ? 'ウルフ' : '市民'}の勝ちです！`}
        via="yuyaito_hoge"
        hashtags={['ワードウルフ', 'ワード人狼']}
        url="https://word-wolf.net/"
      >
        <button className="btn btn-twitter">Twitterでシェアする</button>
      </TwitterShareButton>
      <button className="btn mt-2" onClick={handleNextGame}>
        同じ設定で次のゲームへ
      </button>
      <button className="btn" onClick={() => history.push('/setting/people')}>
        設定に戻る
      </button>
    </div>
  );
};

export default GameResult;

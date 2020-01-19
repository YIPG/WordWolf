import React, { useState } from "react";
import { useGameSettingCtx } from "../../logic/GameSetting";
import { useHistory } from "react-router-dom";

const GameVoting = () => {
  const { gameSetting, setSelectedPlayer } = useGameSettingCtx();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const history = useHistory();
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    // console.log("unti");
    setSelectedIndex(Number(e.currentTarget.value));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSelectedPlayer(selectedIndex);
    history.push("/game/result");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-4xl text-green-400 font-bold pt-24">
        ウルフは誰？
      </span>
      <div className="pt-10 w-3/4">
        <span className="text-xl">
          ウルフだと思う人をせーので指差し、票が最も多かった人を選択してください。
        </span>
      </div>
      <form className="flex flex-col items-center my-6 w-3/5">
        {gameSetting.player.map((player, index) => {
          return (
            // styleたすけて。。。
            <label
              className={
                "mx-2 my-3 py-2 px-6 text-2xl rounded-lg w-full min-h-4xl " +
                (index === selectedIndex
                  ? "bg-white border-green-400 text-green-400 font-bold border-2"
                  : "border-gray-200 text-gray-600 font-medium border-2")
              }
              key={index}
            >
              <input
                type="radio"
                aria-label={`player${index}`}
                name={player.name}
                value={index}
                checked={index === selectedIndex}
                onChange={handleChange}
                className="hidden"
              />
              {player.name}
            </label>
          );
        })}
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn w-1/2 mt-12"
        >
          提出
        </button>
      </form>
    </div>
  );
};

export default GameVoting;

import React from "react";
import Timer from "./Timer";

const GameTimer: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-4xl text-green-400 font-bold pt-24">トーク</span>
      <Timer minutes={3} />
    </div>
  );
};

export default GameTimer;

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Timer = (props: { minutes: number }) => {
  const history = useHistory();
  const [timeLeft, setTimeLeft] = useState(props.minutes * 60);
  const [isOn, setIsOn] = useState(true);

  useEffect(() => {
    if (timeLeft <= 0) {
      history.push("/game/vote");
      return;
    }
    if (!isOn) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, isOn, history]);

  const sec2Timer = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    const minStr = minutes < 10 ? "0" + String(minutes) : String(minutes);
    const secStr = sec < 10 ? "0" + String(sec) : String(sec);
    return { minStr, secStr };
  };

  return (
    <div className="flex flex-col items-center">
      <span className="text-5xl font-thin pt-6 pb-2">
        {sec2Timer(timeLeft).minStr} : {sec2Timer(timeLeft).secStr}
      </span>
      <div className="flex justify-center w-full">
        <button
          className="btn font-light"
          onClick={() => setTimeLeft(timeLeft + 60)}
        >
          1分増やす
        </button>
        <button
          className="btn font-light"
          onClick={() => timeLeft > 60 && setTimeLeft(timeLeft - 60)}
        >
          1分減らす
        </button>
      </div>
      <div className="flex w-full justify-center ">
        {isOn ? (
          <button
            className="btn bg-gray-500 font-light text-white hover:bg-gray-600"
            onClick={() => setIsOn(false)}
          >
            一時停止
          </button>
        ) : (
          <>
            <button
              className="btn bg-gray-500 font-light hover:bg-gray-600 text-white w-1/2 mr-0"
              onClick={() => setIsOn(true)}
            >
              スタート
            </button>
            <button
              className="btn bg-red-400 font-light hover:bg-red-500 text-white w-1/2 ml-0"
              onClick={() => history.push("/game/vote")}
            >
              終了
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Timer;

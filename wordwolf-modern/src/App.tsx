import React from "react";
import { useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <span className="text-center text-green-500 font-extrabold text-4xl pt-40 pb-32">
          ワードウルフ
        </span>
        <button
          onClick={() => navigate("/setting/people")}
          className="btn btn-green w-2/3"
        >
          はじめる
        </button>
        <button
          onClick={() => navigate("/how-to-play")}
          className="btn w-2/3"
        >
          遊び方
        </button>
        <button
          onClick={() => navigate("/privacy-policy")}
          className="btn px-2 w-2/3"
        >
          プライバシーポリシー
        </button>
      </div>
    </div>
  );
};

export default App;

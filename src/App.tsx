import React from "react";
import { useHistory } from "react-router-dom";

const App: React.FC = () => {
  let history = useHistory();

  return (
    <div className="w-screen h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <span className="text-center text-green-500 font-extrabold text-4xl pt-40 pb-32">
          ワードウルフ
        </span>
        <button
          onClick={() => history.push("/setting/people")}
          className="btn btn-green"
        >
          はじめる
        </button>
      </div>
    </div>
  );
};

export default App;

import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const App: React.FC = () => {
  let history = useHistory();
  let location = useLocation();

  // Google Analytics
  // 初回表示
  useEffect(() => {
    const page = location.pathname;
    ReactGA.set({ page: page });
    ReactGA.pageview(page);
  }, []);

  // 初回以降表示
  useEffect(() => {
    history.listen(location => {
      const page = location.pathname || window.location.pathname;
      ReactGA.set({ page: page });
      ReactGA.pageview(page);
    });
  }, [history]);

  return (
    <div className="w-screen h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <span className="text-center text-green-500 font-extrabold text-4xl pt-40 pb-32">
          ワードウルフ
        </span>
        <button
          onClick={() => history.push("/setting/people")}
          className="btn btn-green w-2/3"
        >
          はじめる
        </button>
        <button
          onClick={() => history.push("/how-to-play")}
          className="btn w-2/3"
        >
          遊び方
        </button>
        <button
          onClick={() => history.push("/privacy-policy")}
          className="btn px-2 w-2/3"
        >
          プライバシーポリシー
        </button>
      </div>
    </div>
  );
};

export default App;

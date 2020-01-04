import React from "react";
import { useLocation } from "wouter";

/* 
TODO: トランジションをにアニメーションをつける。
Example
import { useRoute } from "wouter";
import { Transition } from "react-transition-group";

const AnimatedRoute = () => {
  // `match` is boolean
  const [match, params] = useRoute("/users/:id");

  return <Transition in={match}>Hi, this is: {params.id}</Transition>;
};
*/

const App: React.FC = () => {
  const [location, setLocation] = useLocation();

  return (
    <div className="w-screen h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <span className="text-center text-green-500 font-extrabold text-4xl pt-40 pb-32">
          ワードウルフ
        </span>
        <button
          onClick={() => setLocation("/setting/people")}
          className="btn btn-green"
        >
          はじめる
        </button>
        <button className="btn btn-green">遊び方</button>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import { useHistory } from "react-router-dom";

const HowToPlay = () => {
  const history = useHistory();
  return (
    <div className="flex flex-col items-center pb-16">
      <span className="text-4xl text-green-400 font-bold pt-24">遊び方</span>
      <div className="pt-12 w-4/5 font-normal">
        <div className="text-lg font-medium mb-4 py-1 px-2 bg-green-500 text-white">
          ワードウルフとは
        </div>
        <div>
          ワードウルフとは、みんなで『あるお題』について話し合う中、
          <span className="font-bold">
            『みんなとは異なるお題』を与えられた少数派の人（ワードウルフ）を探し出すゲーム
          </span>
          です。
          <br />
          <br />
          例えば、下のイラストでは、多くの人が「りんご」というお題を与えられている中で、「なし」というお題を与えられた少数派がワードウルフ、ということになります。
        </div>
        <br />

        <div className="flex justify-center">
          <img
            className="w-full sm:w-1/2"
            alt="how-to-play"
            src="/wordwolf-explanation.jpg"
          />
        </div>
        <br />
        <div>
          ちなみに多数派は『市民』、少数派は『ワードウルフ』と呼びます。 <br />
          <br />
          ただ、
          <span className="font-bold">
            ゲーム開始時にお題を与えられた時点では、自分がどちらの役職なのか分かりません。
          </span>
          <br />
          <br />
          周囲の会話をヒントに、自分が『市民』なのか『ワードウルフ』なのかを探っていきます。
          <br />
          <br />
          もし「自分のお題が周囲と違うな」と思ったら、あなたが『ワードウルフ』かもしれません。その時は周りの会話から「市民のお題」を推理して話を合わせて、自分がワードウルフであることがバレないように振る舞いましょう。
          <br />
          <br />
          お題について話し合った後、多数決で処刑する人を決めます。
          <span className="font-bold">
            『ワードウルフを処刑できれば市民チームの勝ち』
          </span>
          で、
          <span className="font-bold">
            『市民が処刑されればワードウルフの勝ち』
          </span>
          となります。
        </div>
      </div>
      <button onClick={() => history.push("/")} className="btn mt-12">
        TOPへ
      </button>
    </div>
  );
};

export default HowToPlay;

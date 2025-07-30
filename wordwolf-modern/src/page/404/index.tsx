import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <span className="font-thin text-4xl text-green-500">404 Not Found</span>
      <span className="font-hairline text-lg py-4 px-12">
        大変申し訳ありませんが、
        <a className="text-green-500" href="/">
          トップページ
        </a>
        へお戻りください。
      </span>
      <img
        alt="dogeza"
        className="pt-6 w-48 object-contain"
        src="https://2.bp.blogspot.com/-HUTXJXs7Va4/WZVg1CzrH8I/AAAAAAABGFM/ebgsMcAigKIg69dW2U7GFIPJ91z116ZsACLcBGAs/s800/dogeza_businessman.png"
      />
    </div>
  );
};

export default NotFound;

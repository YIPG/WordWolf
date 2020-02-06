import React from "react";
import { useGameSettingCtx } from "../logic/GameSetting";

const Alert = (props: { title: string; content: string }) => {
  const { setShowAlert } = useGameSettingCtx();
  return (
    <div
      className="bg-red-100 alert-footer bottom-0 fixed w-full border border-red-400 text-red-600 px-4 py-3 "
      role="alert"
    >
      <strong className="font-semibold">{props.title}</strong>
      <span className="block sm:inline text-gray-600">{props.content}</span>
      <span
        className="absolute top-0 bottom-0 right-0 px-3 py-3"
        onClick={() => setShowAlert(false)}
      >
        <svg
          className="fill-current h-6 w-6 text-red-400"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );
};

export default Alert;
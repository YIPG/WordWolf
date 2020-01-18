import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCaretLeft,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import { useNameListCtx } from "../../logic/NameList";
import { useForm } from "react-hook-form";
import NameItem from "./NameItem";
import { useHistory } from "react-router-dom";

const PeopleSetting: React.FC = () => {
  const { nameList, increment, decrement, replaceNameList } = useNameListCtx();

  const history = useHistory();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: { [key: number]: string }) => {
    replaceNameList(data);
    history.push("/setting/game");
    return;
  };

  // const onDeleteEl = (index: number) => {
  //   const values = getValues();
  //   replaceNameList(values);
  //   removeItem(index);
  // };

  const num = nameList.length;
  return (
    <div className="h-full">
      <div className="flex flex-col items-center">
        <span className="text-4xl text-green-400 font-bold pt-24">
          プレイヤー設定
        </span>
        <span className="text-lg font-semibold pt-6 pb-4">人数</span>
        <div className="flex flex-row justify-center items-center pb-8">
          <span
            onClick={() => num > 3 && decrement()}
            className="text-5xl px-6"
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </span>
          <span className="text-3xl font-bold px-16 my-auto">{num}</span>
          <span onClick={() => increment()} className="text-5xl px-6">
            <FontAwesomeIcon icon={faCaretRight} />
          </span>
        </div>
        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            {nameList.map((name, index) => {
              return (
                <NameItem
                  key={index}
                  register={register}
                  index={index}
                  name={name}
                  // onDeleteEl={onDeleteEl}
                />
              );
            })}
          </div>
          <span className="py-4 text-2xl" onClick={increment}>
            <FontAwesomeIcon icon={faPlusCircle} />
          </span>
          <button type="submit" className="btn btn-green">
            ゲーム設定へ
          </button>
        </form>
      </div>
    </div>
  );
};

export default PeopleSetting;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

type ItemProps = {
  index: number;
  removeItem: (arg: number) => void;
  register: any;
  name: string;
};

const NameItem: React.FC<ItemProps> = props => {
  const { index, removeItem, register } = props;

  const placeHoldder = `プレイヤー ${index + 1}`;
  return (
    <div className="flex my-4 items-center">
      <input
        className="flex-grow form my-1"
        type="text"
        name={String(index)}
        placeholder={placeHoldder}
        ref={register}
      />

      {
        // TODO: プレイヤー削除ボタンの実装(useFormの解析)
        /* <span
        className="ml-auto pl-5 text-lg text-red-500"
        onClick={() => {
          console.log(index);
          removeItem(index);
        }}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </span> */
      }
    </div>
  );
};

export default NameItem;

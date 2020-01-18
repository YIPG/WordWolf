import React from "react";

type ItemProps = {
  index: number;
  // onDeleteEl: (arg: number) => void;
  register: any;
  name: string;
};

const NameItem: React.FC<ItemProps> = props => {
  const { index, register, name } = props;

  const placeHoldder = `プレイヤー ${index + 1}`;
  return (
    <div className="flex my-4 items-center">
      <input
        className="flex-grow form my-1"
        type="search"
        name={String(index)}
        placeholder={placeHoldder}
        ref={register}
        defaultValue={name}
      />

      {/* <span
        className="ml-auto pl-5 text-lg text-red-500"
        onClick={() => {
          onDeleteEl(index);
        }}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </span> */}
    </div>
  );
};

export default NameItem;

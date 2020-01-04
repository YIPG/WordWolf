import { useState } from "react";
import { createCtx } from "../context";

export function useNameList() {
  const [nameList, setNameList] = useState<string[]>(["", "", ""]);
  const decrement = () =>
    setNameList(prev => prev.filter((_, i) => i !== prev.length - 1));
  const increment = () => setNameList(prev => [...prev, ""]);
  const removeItem = (index: number) => {
    return setNameList(prev =>
      prev.filter((_, i) => {
        console.log(i !== index);
        return i !== index;
      })
    );
  };
  const resetName = (index: number) =>
    setNameList(prev => prev.map((name, i) => (i === index ? "" : name)));
  const replaceNameList = (data: { [key: number]: string }) =>
    setNameList(Object.values(data));

  return {
    nameList,
    decrement,
    increment,
    removeItem,
    resetName,
    replaceNameList
  } as const;
}

type ContextProps = {
  nameList: string[];
  decrement: () => void;
  increment: () => void;
  removeItem: (arg: number) => void;
  resetName: (arg: number) => void;
  replaceNameList: (data: { [key: number]: string }) => void;
};

export const [useCtx, NameListProvider] = createCtx<ContextProps>();

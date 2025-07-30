import { useState, useEffect } from "react";
import { createCtx } from "../context";
import localForage from "localforage";

export function useNameList() {
  const initialState = ["", "", ""];
  const [nameList, setNameList] = useState<string[]>(initialState);

  useEffect(() => {
    const getDataIndexedDB = async () => {
      const data = await localForage.getItem<string[]>("nameList");
      if (data) {
        setNameList(data);
      }
    };
    if (nameList === initialState) {
      getDataIndexedDB();
    }
  }, []);
  // player情報に変更があったらIndexedDBにキャッシュする。
  useEffect(() => {
    const setDataToIndexedDB = async () => {
      await localForage.setItem("nameList", nameList);
    };
    if (nameList !== initialState) {
      setDataToIndexedDB();
    }
  }, [nameList]);

  const decrement = () =>
    setNameList(prev => prev.filter((_, i) => i !== prev.length - 1));
  const increment = () => setNameList(prev => [...prev, ""]);
  const removeItem = (index: number) =>
    setNameList(prev => prev.filter((_, i) => i !== index));

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

export const [useNameListCtx, NameListProvider] = createCtx<ContextProps>();

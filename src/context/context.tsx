import React, { createContext, FC, useContext } from "react";
import { IData, IDataProvider } from "./types";
import useSavedNotesHook from "./useSavedNotesHook";

const Data = createContext<IData | null>(null);

export const useData = () => {
  return useContext(Data);
};

const DataProvider: FC<IDataProvider> = ({ children }) => {
  const { note, setNote } = useSavedNotesHook();

  return <Data.Provider value={{ note, setNote }}>{children}</Data.Provider>;
};

export default DataProvider;

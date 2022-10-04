import { Dispatch, SetStateAction } from "react";

export interface INote {
  id: number;
  title: string;
  body: string;
}

export interface IData {
  note: INote | null;
  setNote: Dispatch<SetStateAction<INote>>;
}

export interface IDataProvider {
  children: React.ReactNode;
}

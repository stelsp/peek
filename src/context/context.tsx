import React, { createContext, FC, useContext } from "react";
import { IData, IDataProvider } from "./types";
import useSavedNotesHook from "./useSavedNotesHook";

const Data = createContext<IData | null>(null);

export const useData = () => {
  return useContext(Data);
};

const DataProvider: FC<IDataProvider> = ({ children }) => {
  const { notes, setNotes } = useSavedNotesHook();

  const addNote = (label: string, body: string) => {
    const newNote = { label, body, status: false, id: String(Date.now()) };
    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
  };

  const deleteNote = (id: string) => {
    const newNotes = notes.filter((item) => item.id !== id);
    setNotes(newNotes);
  };

  const changeNoteLabel = (label: string, id: string) => {
    const note = notes.find((item) => item.id === id);
    if (!note) return null;
    const newNote = { ...note, label };
    const newNotes = notes.map((item) => (item.id === id ? newNote : item));
    setNotes(newNotes);
  };

  const changeNoteBody = (body: string, id: string) => {
    const note = notes.find((item) => item.id === id);
    if (!note) return null;
    const newNote = { ...note, body };
    const newNotes = notes.map((item) => (item.id === id ? newNote : item));
    setNotes(newNotes);
  };

  const changeNoteStatus = (status: boolean, id: string) => {
    const note = notes.find((item) => item.id === id);
    if (!note) return null;
    const newNote = { ...note, status };
    const newNotes = notes.map((item) => (item.id === id ? newNote : item));
    setNotes(newNotes);
  };

  const clearAllNotes = () => {
    setNotes([]);
  };

  return (
    <Data.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        changeNoteLabel,
        changeNoteBody,
        changeNoteStatus,
        clearAllNotes,
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default DataProvider;

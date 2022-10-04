import { useState, useEffect } from "react";
import { INote } from "./types";

const useSavedNotesHook = () => {
  const [note, setNote] = useState<INote>(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      return JSON.parse(savedNotes);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(note));
  }, [note]);

  return { note, setNote };
};

export default useSavedNotesHook;

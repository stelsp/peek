import { useState, useEffect } from "react";
import { INote } from "./types";

const useSavedNotesHook = () => {
  const [notes, setNotes] = useState<INote[]>(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      return JSON.parse(savedNotes);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return { notes, setNotes };
};

export default useSavedNotesHook;

import React, { FC, useState, useEffect } from "react";
import { useData } from "../../context/context";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { INote } from "../../context/types";

const Item: FC<INote> = ({ status, id, label, body }) => {
  const { deleteNote, changeNoteLabel, changeNoteBody, changeNoteStatus } =
    useData()!;

  return (
    <div style={{ width: "max-content" }}>
      {label === "" && body === "" ? (
        <>
          <input
            placeholder="пустая заметка"
            type="text"
            value={label}
            onChange={(e) => changeNoteLabel(e.target.value, id)}
          />
          <input
            placeholder="пустая заметка"
            type="text"
            value={body}
            onChange={(e) => changeNoteBody(e.target.value, id)}
          />
        </>
      ) : (
        <>
          <input
            placeholder="title"
            type="text"
            value={label}
            onChange={(e) => changeNoteLabel(e.target.value, id)}
          />
          <input
            placeholder="body"
            type="text"
            value={body}
            onChange={(e) => changeNoteBody(e.target.value, id)}
          />
        </>
      )}
      <button type="button" onClick={() => deleteNote(id)}>
        delete
      </button>
      <button
        type="button"
        onClick={() => changeNoteStatus(!status, id)}
        style={status ? { background: "green" } : { background: "red" }}
      >
        toggle
      </button>
    </div>
  );
};

const Workspace: FC = () => {
  const { notes, addNote, clearAllNotes } = useData()!;
  const [note, setNote] = useState({ label: "", body: "" });

  const handleClickAway = () => {
    if (note.label === "" && note.body === "") return null;
    addNote(note.label, note.body);
    setNote({ label: "", body: "" });
  };

  useEffect(() => {}, [note]);

  return (
    <main>
      <button onClick={clearAllNotes}>clear all</button>
      <ClickAwayListener onClickAway={handleClickAway}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (note.label === "" && note.body === "") return null;
            addNote(note.label, note.body);
            setNote({ label: "", body: "" });
          }}
          action="submit"
        >
          <input
            placeholder="title form"
            type="text"
            value={note.label}
            onChange={(e) => setNote({ ...note, label: e.target.value })}
          />
          <input
            placeholder="body form"
            type="text"
            value={note.body}
            onChange={(e) => setNote({ ...note, body: e.target.value })}
          />
          {notes.length > 0 ? (
            notes.map((item, index) => <Item key={index} {...item} />)
          ) : (
            <p>нет заметок</p>
          )}
          <input type="submit" />
        </form>
      </ClickAwayListener>
    </main>
  );
};

export default Workspace;

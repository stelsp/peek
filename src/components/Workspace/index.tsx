import React, { FC, useState, useEffect } from "react";
import { useData } from "../../context/context";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { INote } from "../../context/types";

const Item: FC<INote> = ({ status, id, label, body }) => {
  const { deleteNote } = useData()!;

  return (
    <div style={{ width: "max-content" }}>
      <input placeholder="title" type="text" value={label} />
      <input placeholder="body" type="text" value={body} />
      <button type="button" onClick={() => deleteNote(id)}>
        delete
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
          style={{ border: "1px solid black" }} // УДАЛИТЬ
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
            style={{ marginBottom: "20px" }} // УДАЛИТЬ
          />
          {notes.length > 0 ? (
            notes.map((item, index) => <Item key={index} {...item} />)
          ) : (
            <p>нету</p>
          )}
          <input type="submit" />
        </form>
      </ClickAwayListener>
    </main>
  );
};

export default Workspace;

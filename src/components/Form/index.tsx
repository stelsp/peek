import React, { FC, useState } from "react";
import { useData } from "../../context/context";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { INote } from "../../context/types";
import { Box, Button, Grid, Paper, TextField } from "@mui/material";

const Item: FC<INote> = ({ status, id, label, body }) => {
  const { deleteNote, changeNoteLabel, changeNoteBody, changeNoteStatus } =
    useData()!;

  return (
    <Grid item>
      <Paper
        elevation={3}
        sx={{
          width: "max-content",
          p: 2,
          br: 4,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <TextField
          label="title"
          variant="standard"
          type="text"
          value={label}
          onChange={(e) => changeNoteLabel(e.target.value, id)}
        />
        <TextField
          label="body"
          variant="standard"
          type="text"
          value={body}
          onChange={(e) => changeNoteBody(e.target.value, id)}
        />
        <Button
          variant="contained"
          type="button"
          size="small"
          color="warning"
          onClick={() => deleteNote(id)}
        >
          Delete
        </Button>
        <Button
          variant="outlined"
          type="button"
          size="small"
          color="warning"
          onClick={() => changeNoteStatus(!status, id)}
        >
          Toggle
        </Button>
      </Paper>
    </Grid>
  );
};

export const Workspace: FC = () => {
  const { notes } = useData()!;
  return (
    <Grid container spacing={2} sx={{ pt: 4, justifyContent: "center" }}>
      {notes.length > 0 ? (
        notes.map((item, index) => <Item key={index} {...item} />)
      ) : (
        <p>нет заметок</p>
      )}
    </Grid>
  );
};

const Form: FC = () => {
  const { addNote } = useData()!;
  const [note, setNote] = useState({ label: "", body: "" });

  const handleClickAway = () => {
    if (note.label === "" && note.body === "") return null;
    addNote(note.label, note.body);
    setNote({ label: "", body: "" });
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <form
        style={{ width: "max-content", marginInline: "auto" }}
        onSubmit={(e) => {
          e.preventDefault();
          if (note.label === "" && note.body === "") return null;
          addNote(note.label, note.body);
          setNote({ label: "", body: "" });
        }}
        action="submit"
      >
        <Paper
          elevation={3}
          sx={{
            mt: 4,
            p: 2,
            br: 4,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <TextField
            label="title form"
            variant="standard"
            type="text"
            value={note.label}
            onChange={(e) => setNote({ ...note, label: e.target.value })}
          />
          <TextField
            label="body form"
            variant="standard"
            type="text"
            value={note.body}
            onChange={(e) => setNote({ ...note, body: e.target.value })}
          />
          <Button variant="outlined" type="submit" size="small" color="warning">
            Закрыть
          </Button>
        </Paper>
      </form>
    </ClickAwayListener>
  );
};

export default Form;

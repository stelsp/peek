import React, { FC, useState } from "react";
import { useData } from "../../context/context";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Box, Button, Paper, TextField } from "@mui/material";

const Form: FC = () => {
  const { addNote } = useData()!;
  const [note, setNote] = useState({ label: "", body: "" });
  const [state, setState] = useState(false);

  const handleClickAway = () => {
    setState(false);
    if (note.label === "" && note.body === "") return null;
    addNote(note.label, note.body);
    setNote({ label: "", body: "" });
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        component="form"
        sx={{ marginInline: "auto" }}
        onSubmit={(e) => {
          e.preventDefault();
          if (note.label === "" && note.body === "") {
            setState(false);
          } else {
            addNote(note.label, note.body);
            setNote({ label: "", body: "" });
            setState(false);
          }
        }}
        action="submit"
      >
        <Paper
          elevation={3}
          sx={{
            width: "min(600px, 100%)",
            marginInline: "auto",
            mt: 4,
            p: 2,
            br: 4,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {state && (
            <TextField
              label="Заголовок"
              variant="standard"
              value={note.label}
              onChange={(e) => setNote({ ...note, label: e.target.value })}
            />
          )}
          <TextField
            label="Заметка"
            variant="standard"
            value={note.body}
            onClick={() => setState(true)}
            onChange={(e) => setNote({ ...note, body: e.target.value })}
          />
          {state && (
            <Button
              variant="text"
              type="submit"
              size="small"
              color="warning"
              sx={{ ml: "auto" }}
            >
              Закрыть
            </Button>
          )}
        </Paper>
      </Box>
    </ClickAwayListener>
  );
};

export default Form;

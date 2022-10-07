import React, { FC, useState } from "react";
import ListIcon from "@mui/icons-material/List";
import PushPinIcon from "@mui/icons-material/PushPin";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import {
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useData } from "../../context/context";
import { INote } from "../../context/types";

interface IconBarProps {
  status: boolean;
  id: string;
}

const IconBar: FC<IconBarProps> = ({ status, id }) => {
  const { deleteNote, changeNoteStatus } = useData()!;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ ml: "auto" }}>
      <IconButton size="large" onClick={handleMenu}>
        <ListIcon onClick={() => changeNoteStatus(!status, id)} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => deleteNote(id)}>Удалить заметку</MenuItem>
        <MenuItem onClick={() => null}>В архив</MenuItem>
      </Menu>
      <IconButton size="large">
        <PushPinIcon />
      </IconButton>
    </Box>
  );
};

const Item: FC<INote> = ({ status, id, label, body }) => {
  const { changeNoteLabel, changeNoteBody } = useData()!;

  const handleLabelChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string
  ) => changeNoteLabel(e.target.value, id);

  const handleBodyChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string
  ) => changeNoteBody(e.target.value, id);

  return (
    <Grid
      item
      sx={{
        width: "min(600px, 100%)",
        mt: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 2,
          br: 4,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <TextField
          label="Заголовок"
          variant="standard"
          fullWidth
          value={label}
          onChange={(e) => handleLabelChange(e, id)}
        />
        <TextField
          label="Заметка"
          variant="standard"
          fullWidth
          onChange={(e) => handleBodyChange(e, id)}
          value={body}
        />
        <IconBar status={status} id={id} />
      </Paper>
    </Grid>
  );
};

export const Workspace: FC = () => {
  const { notes } = useData()!;
  return (
    <Grid container sx={{ pt: 4, justifyContent: "center" }}>
      {notes.length > 0 ? (
        notes.map((item, index) => <Item key={index} {...item} />)
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            mt: 8,
          }}
        >
          <LightbulbOutlinedIcon fontSize="large" color="warning" />
          <Typography variant="h5" component="p">
            Здесь будут ваши заметки.
          </Typography>
        </Box>
      )}
    </Grid>
  );
};

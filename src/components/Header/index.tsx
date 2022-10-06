import React, { Dispatch, FC, SetStateAction, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import SearchBar from "../SearchBar";
import MenuIcon from "@mui/icons-material/Menu";
import TaskIcon from "@mui/icons-material/Task";
import { useData } from "../../context/context";

interface HeaderProps {
  setSideBarOpen: Dispatch<SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = ({ setSideBarOpen }) => {
  const { clearAllNotes } = useData()!;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSideBarOpen = () => {
    setSideBarOpen(true);
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1 }}
          onClick={handleSideBarOpen}
        >
          <MenuIcon />
        </IconButton>
        <TaskIcon sx={{ fontSize: 50, mr: 1 }} color="warning" />
        <Typography variant="h5" fontWeight={500} component="div">
          Peek
        </Typography>
        <SearchBar />
        <Box sx={{ ml: "auto" }}>
          <IconButton size="large" onClick={handleMenu} color="inherit">
            <SettingsIcon />
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
            <MenuItem onClick={clearAllNotes}>Удалить все заметки</MenuItem>
            <MenuItem onClick={handleClose}>Сменить тему</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

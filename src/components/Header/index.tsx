import React, { Dispatch, FC, SetStateAction, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchBar from "../SearchBar";
import MenuIcon from "@mui/icons-material/Menu";
import TaskIcon from "@mui/icons-material/Task";

interface HeaderProps {
  setSideBarOpen: Dispatch<SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = ({ setSideBarOpen }) => {
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
        <div style={{ marginLeft: "auto" }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <SettingsIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
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
            <MenuItem onClick={handleClose}>Настройки</MenuItem>
            <MenuItem onClick={handleClose}>Сменить тему</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

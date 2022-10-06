import React, { FC } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ArchiveIcon from "@mui/icons-material/Archive";

interface SideBarProps {
  sideBarOpen: boolean;
  closeSideBar: () => void;
}

const SideBar: FC<SideBarProps> = ({ sideBarOpen, closeSideBar }) => {
  return (
    <Drawer anchor="left" open={sideBarOpen} onClose={closeSideBar}>
      <List>
        <ListItem>
          <ListItemIcon>
            <LightbulbOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Заметки</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ArchiveIcon />
          </ListItemIcon>
          <ListItemText>Архив</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DeleteForeverIcon />
          </ListItemIcon>
          <ListItemText>Удаленные</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;

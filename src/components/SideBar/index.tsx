import React, { FC } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

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
            <DeleteForeverIcon />
          </ListItemIcon>
          <ListItemText>Сайд-бар</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DeleteForeverIcon />
          </ListItemIcon>
          <ListItemText>Сайд-бар</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DeleteForeverIcon />
          </ListItemIcon>
          <ListItemText>Сайд-бар</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DeleteForeverIcon />
          </ListItemIcon>
          <ListItemText>Сайд-бар</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DeleteForeverIcon />
          </ListItemIcon>
          <ListItemText>Сайд-бар</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;

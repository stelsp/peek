import React, { FC } from "react";
import { Drawer, ListItem, ListItemText } from "@mui/material";
import { List } from "@mui/icons-material";

interface SideBarProps {
  sideBarOpen: boolean;
  closeSideBar: () => void;
}

const SideBar: FC<SideBarProps> = ({ sideBarOpen, closeSideBar }) => {
  return (
    <Drawer anchor="left" open={sideBarOpen} onClose={closeSideBar}>
      <List>
        <ListItem>
          <ListItemText>Сайд-бар</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;

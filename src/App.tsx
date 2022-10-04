import { Container } from "@mui/material";
import React, { FC, useState } from "react";
import Header from "./components/Header";
import Workspace from "./components/Workspace";
import SideBar from "./components/SideBar";

const App: FC = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <>
      <Header setSideBarOpen={setSideBarOpen} />
      <Container>
        <Workspace />
      </Container>
      <SideBar
        sideBarOpen={sideBarOpen}
        closeSideBar={() => setSideBarOpen(false)}
      />
    </>
  );
};

export default App;

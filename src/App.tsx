import React, { FC, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { Container } from "@mui/material";
import { Workspace } from "./components/Workspace";

const App: FC = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <>
      <Header setSideBarOpen={setSideBarOpen} />
      <Container>
        <Form />
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

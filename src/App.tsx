import React, { FC, useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

const App: FC = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <>
      <Header setSideBarOpen={setSideBarOpen} />
      <SideBar
        sideBarOpen={sideBarOpen}
        closeSideBar={() => setSideBarOpen(false)}
      />
    </>
  );
};

export default App;

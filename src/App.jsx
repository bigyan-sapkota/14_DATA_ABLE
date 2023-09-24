import React from "react";
import SideNav from "./components/SideNav";
import DashBoard from "./components/DashBoard";

const App = () => {
  return (
    <div>
      <div className="flex">
        <SideNav />
        <DashBoard />
      </div>
    </div>
  );
};

export default App;

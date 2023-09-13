import React from "react";
import SideNav from "./components/SideNav/SideNav";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <div className="flex">
      <SideNav />
      <Dashboard />
    </div>
  );
};

export default App;

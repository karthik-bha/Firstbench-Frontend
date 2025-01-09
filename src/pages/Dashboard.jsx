import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import RightContainer from "../components/RightContainer/RightContainer";

const Dashboard = () => {
  return (
    <div className="max-w-[1300px] mx-auto ">
      <div className="mx-2 md:flex gap-6">
        <Sidebar />
        <RightContainer />
      </div>
    </div>
  );
};

export default Dashboard;

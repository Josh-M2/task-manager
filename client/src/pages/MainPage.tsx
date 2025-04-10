import React from "react";
import TaskInputForm from "../components/TaskInputForm";
import ShowTask from "@/components/ShowTask";
import ShowDoing from "@/components/ShowDoing";
import ShowDone from "@/components/ShowDone";

const MainPage: React.FC = () => {
  return (
    <div className="flex gap-2">
      {/* <TaskInputForm /> */}
      <ShowTask />
      <ShowDoing />
      <ShowDone />
    </div>
  );
};

export default MainPage;

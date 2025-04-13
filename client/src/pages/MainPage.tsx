import React, { useEffect, useState } from "react";

import ShowTask from "@/components/ShowTask";
import ShowDoing from "@/components/ShowDoing";
import ShowDone from "@/components/ShowDone";
import { initTodoList } from "@/services/toDoServices";
import { TaskTypes } from "@/types/todoTypes";

const MainPage: React.FC = () => {
  const [toDoList, setToDoList] = useState<TaskTypes[]>([]);
  const [doingList, setDoingList] = useState<TaskTypes[]>([]);
  const [doneList, setDoneList] = useState<TaskTypes[]>([]);
  useEffect(() => {
    const initialFetchOfToDoList = async () => {
      try {
        const response = await initTodoList();
        if (response) {
          console.log("initTODOLIST: ", response);

          const todos = response.filter((item) => item.category === "todo");
          const doing = response.filter((item) => item.category === "doing");
          const done = response.filter((item) => item.category === "done");

          console.log("todos", todos);

          setToDoList(todos);
          setDoingList(doing);
          setDoneList(done);
        }
      } catch (error: any) {
        console.log(error.message);
      }
    };
    initialFetchOfToDoList();
  }, []);

  return (
    <div className="flex gap-2">
      {/* <TaskInputForm /> */}
      <ShowTask toDoList={toDoList} setToDoList={setToDoList} />
      <ShowDoing doingList={doingList} />
      <ShowDone doneList={doneList} />
    </div>
  );
};

export default MainPage;

import React, { useEffect, useState } from "react";

import ShowTask from "@/components/ShowTask";
import ShowDoing from "@/components/ShowDoing";
import ShowDone from "@/components/ShowDone";
import { initTodoList } from "@/services/toDoServices";
import { TaskTypes } from "@/types/todoTypes";
import { socket } from "@/lib/socketIO";

const MainPage: React.FC = () => {
  const [toDoList, setToDoList] = useState<TaskTypes[]>([]);
  const [doingList, setDoingList] = useState<TaskTypes[]>([]);
  const [doneList, setDoneList] = useState<TaskTypes[]>([]);
  const [loadingInit, setLoadingInit] = useState<boolean>(true);

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
          setLoadingInit(false);
        }
      } catch (error: any) {
        console.log(error.message);
      }
    };
    initialFetchOfToDoList();
  }, []);

  useEffect(() => {
    // connect to suck it!
    if (!socket.connected) socket.connect();

    socket.on("connect", () => {
      console.log("Socket connected! ID:", socket.id);
    });

    socket.on("updateTask", (payload) => {
      console.log("payload", payload);

      //remove the list first that matches the payload
      setToDoList((prev) => prev.filter((task) => task._id !== payload._id));
      setDoingList((prev) => prev.filter((task) => task._id !== payload._id));
      setDoneList((prev) => prev.filter((task) => task._id !== payload._id));

      switch (payload.category) {
        case "todo":
          setToDoList((prev) => [payload, ...prev]);
          break;

        case "doing":
          setDoingList((prev) => [payload, ...prev]);

          break;

        case "done":
          setDoneList((prev) => [payload, ...prev]);

          break;

        default:
          break;
      }
    });

    return () => {
      socket.disconnect();
      socket.off("updateTask");
    };
  }, []);

  return (
    <div className="flex gap-2">
      {/* <TaskInputForm /> */}
      <ShowTask
        toDoList={toDoList}
        setToDoList={setToDoList}
        loadingInit={loadingInit}
      />
      <ShowDoing
        doingList={doingList}
        setDoingList={setDoingList}
        loadingInit={loadingInit}
      />
      <ShowDone
        doneList={doneList}
        setDoneList={setDoneList}
        loadingInit={loadingInit}
      />
    </div>
  );
};

export default MainPage;

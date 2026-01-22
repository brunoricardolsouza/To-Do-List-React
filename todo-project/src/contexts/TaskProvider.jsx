import { useState } from "react";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }) => {
  //States
  const [taskText, setTaskText] = useState("");
  const [listTasks, setListTasks] = useState([]);

  return (
    <TaskContext.Provider
      value={{
        taskText,
        setTaskText,
        listTasks,
        setListTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

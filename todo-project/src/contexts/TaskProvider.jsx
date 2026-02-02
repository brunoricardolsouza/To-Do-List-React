import { useMemo, useState } from "react";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }) => {
  //States
  const [taskText, setTaskText] = useState("");
  const [listTasks, setListTasks] = useState([]);

  const value = useMemo(
    () => ({
      taskText,
      setTaskText,
      listTasks,
      setListTasks,
    }),
    [taskText, listTasks],
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

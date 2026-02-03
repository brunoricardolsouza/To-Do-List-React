import { useEffect, useMemo, useState } from "react";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }) => {
  //States
  const [taskText, setTaskText] = useState("");

  const [listTasks, setListTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(listTasks));
  }, [listTasks]);

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

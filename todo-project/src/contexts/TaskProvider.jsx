import { useState } from "react";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }) => {
  //States
  const [taskText, setTaskText] = useState("");
  const [listTasks, setListTasks] = useState([]);

  //Derived Values
  const completedCount = listTasks.filter((task) => task.completed).length;
  const allTasksCompleted =
    listTasks.length > 0 && completedCount === listTasks.length;

  //Functions
  const addTask = () => {
    if (taskText.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    setListTasks((prev) => [...prev, newTask]);
    setTaskText("");
  };

  const removeTask = (idToRemove) => {
    setListTasks((prev) => prev.filter((task) => task.id !== idToRemove));
  };

  const toggleCompleteTask = (id) => {
    setListTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeAllCompletedTasks = () => {
    setListTasks((prev) => prev.filter((task) => !task.completed));
  };

  const removeAllTasks = () => {
    setListTasks([]);
  };

  return (
    <TaskContext.Provider
      value={{
        taskText,
        setTaskText,
        listTasks,
        completedCount,
        allTasksCompleted,
        addTask,
        removeTask,
        toggleCompleteTask,
        removeAllCompletedTasks,
        removeAllTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

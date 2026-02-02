import { useTasks } from "./useTasks";

export const useTasksActions = () => {
  const { taskText, setTaskText, listTasks, setListTasks } = useTasks();

  //Functions
  const addTask = () => {
    if (taskText.trim() === "") return;

    const newTask = {
      id: crypto.randomUUID(),
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
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const removeAllCompletedTasks = () => {
    setListTasks((prev) => prev.filter((task) => !task.completed));
  };

  const removeAllTasks = () => {
    setListTasks([]);
  };

  return {
    addTask,
    removeTask,
    toggleCompleteTask,
    removeAllCompletedTasks,
    removeAllTasks,
  };
};

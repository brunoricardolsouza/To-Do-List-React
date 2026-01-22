import { useTasks } from "./useTasks";

export const useTasksStats = () => {
  const { listTasks } = useTasks();

  const completedCount = listTasks.filter((task) => task.completed).length;

  const allTasksCompleted =
    listTasks.length > 0 && completedCount === listTasks.length;

  return {
    completedCount,
    allTasksCompleted,
  };
};

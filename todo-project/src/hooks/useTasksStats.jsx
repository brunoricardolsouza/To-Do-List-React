import { useMemo } from "react";
import { useTasks } from "./useTasks";

export const useTasksStats = () => {
  const { listTasks } = useTasks();

  const completedCount = useMemo(() => {
    return listTasks.filter((task) => task.completed).length;
  }, [listTasks]);

  const allTasksCompleted = useMemo(() => {
    return listTasks.length > 0 && completedCount === listTasks.length;
  }, [listTasks, completedCount]);

  return {
    completedCount,
    allTasksCompleted,
  };
};

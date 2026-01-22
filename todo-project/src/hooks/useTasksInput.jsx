import { useTasks } from "./useTasks";
import { useTasksActions } from "./useTasksActions";

export const useTasksInput = () => {
  const { taskText, setTaskText } = useTasks();
  const { addTask } = useTasksActions();

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };
  return {
    taskText,
    handleChange,
    handleKeyDown,
    addTask,
  };
};

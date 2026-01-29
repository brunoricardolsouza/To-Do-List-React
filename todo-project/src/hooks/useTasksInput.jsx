import { useTasks } from "./useTasks";
import { useTasksActions } from "./useTasksActions";

export const useTasksInput = (inputRef) => {
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

  const handleAdd = () => {
    addTask();
    inputRef.current.focus();
  };

  return {
    taskText,
    handleChange,
    handleKeyDown,
    handleAdd,
  };
};

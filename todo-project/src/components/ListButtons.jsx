import { useTasksActions } from "../hooks/useTasksActions";

export const ListButtons = () => {
  const { removeAllCompletedTasks, removeAllTasks } = useTasksActions();
  return (
    <div id="list-buttons-tasks">
      <button
        className="btn-del-tasks"
        id="btn-del-completed"
        onClick={removeAllCompletedTasks}
      >
        Del Completed Tasks
      </button>
      <button
        className="btn-del-tasks"
        id="btn-del-all-tasks"
        onClick={removeAllTasks}
      >
        Del All Tasks
      </button>
    </div>
  );
};

import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

export const ListButtons = () => {
  const { removeAllCompletedTasks, removeAllTasks } = useContext(TaskContext);
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

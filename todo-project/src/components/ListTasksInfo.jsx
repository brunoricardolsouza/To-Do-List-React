import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

export const ListTasksInfo = () => {
  const { allTasksCompleted, completedCount, listTasks } =
    useContext(TaskContext);
  return (
    <>
      <div id="list-info-tasks">
        <div className="info">
          <h4>Tarefas Adicionadas: {listTasks.length}</h4>
        </div>
        {allTasksCompleted ? (
          <div className="info">
            <h4>Tarefas Concluídas: Todas! 🎉</h4>
          </div>
        ) : (
          <div className="info">
            <h4>Tarefas Concluídas: {completedCount}</h4>
          </div>
        )}
      </div>
    </>
  );
};

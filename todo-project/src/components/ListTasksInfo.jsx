import { useTasks } from "../hooks/useTasks";
import { useTasksStats } from "../hooks/useTasksStats";

export const ListTasksInfo = () => {
  const { listTasks } = useTasks();
  const { completedCount, allTasksCompleted } = useTasksStats();
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

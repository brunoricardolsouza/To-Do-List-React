import { useTasksActions } from "../hooks/useTasksActions";

export const ListItem = ({ task }) => {
  const { removeTask, toggleCompleteTask } = useTasksActions();

  return (
    <li
      className={`task ${task.completed ? "task--completed" : "task--pending"}`}
    >
      <span className="task--title">{task.text}</span>
      <div id="btn-group-task">
        <button
          className="btn-tasks"
          id="btn-concluir-task"
          onClick={() => toggleCompleteTask(task.id)}
        >
          {task.completed ? "Desfazer" : "Concluir"}
        </button>
        <button
          className="btn-tasks"
          id="btn-delete-task"
          onClick={() => removeTask(task.id)}
        >
          Remover
        </button>
      </div>
    </li>
  );
};

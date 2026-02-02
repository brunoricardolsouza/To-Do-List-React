import { ListItem } from "./ListItem";
import { ListTasksInfo } from "./ListTasksInfo";
import { ListButtons } from "./ListButtons";
import { useTasks } from "../hooks/useTasks";
import { useTasksInput } from "../hooks/useTasksInput";
import { useRef } from "react";

export const ListTasks = () => {
  const inputRef = useRef(null);
  const { listTasks } = useTasks();
  const { taskText, handleChange, handleKeyDown, handleAdd } =
    useTasksInput(inputRef);

  return (
    <div className="container">
      <h1>To Do List | BN</h1>
      <div className="input-group">
        <input
          ref={inputRef}
          id="input-new-task"
          type="text"
          placeholder="Enter your task..."
          aria-label="Digite uma nova tarefa"
          onChange={handleChange}
          value={taskText}
          onKeyDown={handleKeyDown}
        />
        <button
          id="btn-new-task"
          title="Clique aqui para adicionar uma nova task!"
          aria-label="Adicionar nova tarefa"
          onClick={handleAdd}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
            />
          </svg>
        </button>
      </div>
      <div className="list-item-group">
        <ListTasksInfo />
        {listTasks.length === 0 ? (
          <span className="task">Não há tarefas na lista!</span>
        ) : (
          <ul id="itens-list-tasks">
            {listTasks.map((task) => (
              <ListItem key={task.id} task={task} />
            ))}
            <ListButtons />
          </ul>
        )}
      </div>
    </div>
  );
};

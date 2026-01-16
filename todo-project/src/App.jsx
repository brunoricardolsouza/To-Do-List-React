import "./App.css";
import { ListTasks } from "./components/ListTasks";
import { TaskProvider } from "./contexts/TaskProvider";

function App() {
  return (
    <TaskProvider>
      <ListTasks />
    </TaskProvider>
  );
}

export default App;

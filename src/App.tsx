import style from "./app.module.scss";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import { useAppSelector } from "./store/hooks";

function App() {
  const pendingTasks = useAppSelector((state) => state.todos.data.length);

  return (
    <div className={style["container"]}>
      <h1>Приложение TO DO</h1>
      <TodoForm />
      <Todos />
      <span className={style["pending"]}>
        Есть {pendingTasks} незавершенных задач
      </span>
    </div>
  );
}

export default App;

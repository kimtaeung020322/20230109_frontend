import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  // store 상태값이 { counter, todos } => 이 중에서 todos만 가져온다.
  const todos = useSelector((state) => state.todos);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;

import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../reducer/todos02";

function TodoItem({ todo }) {
  const { id, text, done } = todo;
  const dispatch = useDispatch();
  return (
    <li style={{ textDecoration: done && "line-through" }}>
      <span onClick={() => dispatch(toggleTodo(id))}>{text}</span>
      <button onClick={() => dispatch(removeTodo(id))}>삭제</button>
    </li>
  );
}

export default TodoItem;

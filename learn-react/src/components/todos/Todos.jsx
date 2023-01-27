import { useReducer } from "react";
import { todosReducer } from "../../state/todos";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

const initialState = [
  { id: 1, text: "컴포넌트 작성하기", done: false },
  { id: 2, text: "기능 구현하기", done: false },
  { id: 3, text: "리팩토링하기", done: false },
];

function Todos() {
  const [todos, dispatch] = useReducer(todosReducer, initialState);
  return (
    <div>
      <TodoCreate />
      <TodoList todos={todos} />
    </div>
  );
}

export default Todos;

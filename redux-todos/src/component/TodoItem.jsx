function TodoItem({ todo }) {
  const { text, done } = todo;
  return <li style={{ textDecoration: done && "line-through" }}>{text}</li>;
}

export default TodoItem;

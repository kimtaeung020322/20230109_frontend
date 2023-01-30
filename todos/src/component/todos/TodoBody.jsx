import styled from "styled-components";
import TodoItem from "./TodoItem";

function TodoBody({ todos }) {
  return (
    <Container>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
`;
export default TodoBody;

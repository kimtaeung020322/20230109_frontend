import styled from "styled-components";

function TodoItem({ todo, dispatch }) {
  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TODO", id: todo.id });
  };
  return (
    <Container done={todo.done}>
      <p onClick={handleToggle}>{todo.text}</p>
      <button>삭제</button>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bd_color};
  text-decoration: ${({ done }) => done && "line-through"};
`;

export default TodoItem;

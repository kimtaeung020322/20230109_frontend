import styled from "styled-components";

function TodoItem({ todo }) {
  return (
    <Container>
      {todo.text}
      <button>삭제</button>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bd_color};
`;

export default TodoItem;

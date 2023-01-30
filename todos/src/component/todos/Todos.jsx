import { useReducer } from "react";
import styled from "styled-components";
import TodoBody from "./TodoBody";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";

function reducer(state, action) {}

function Todos() {
  const [todos, dispatch] = useReducer(reducer, [
    { id: 1, text: "투두리스트 스타일링", done: true },
    { id: 2, text: "투두리스트 기능 구현하기", done: false },
    { id: 3, text: "리팩토링 하기", done: false },
  ]);
  return (
    <Container>
      <TodoHeader todos={todos} />
      <TodoBody />
      <TodoInput />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 700px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);

  background-color: #ffffff;
`;

export default Todos;

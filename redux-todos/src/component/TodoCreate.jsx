import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../reducer/todos02";

function TodoCreate() {
  const [text, setText] = useState("테스트");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(text));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button>등록</button>
      </form>
    </div>
  );
}

export default TodoCreate;

// redux toolkit 활용 버전

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, text: "리덕스 배우기", done: true },
  { id: 2, text: "리덕스 응용하기", done: false },
  { id: 3, text: "리덕스로 todos 만들기", done: false },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo: {
      reducer: (state, action) => {
        // reduxt toolkit에는 immer 라이브러리가 포함된다.
        //      => 데이터 변형을 주어도 불변성을 지키게 도와준다.
        state.push(action.payload);
      },
      prepare: (text) => {
        return {
          payload: {
            id: nanoid(),
            text,
            createdAt: new Date().toDateString(),
            done: false,
          },
        };
      },
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.done = !todo.done;
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { removeTodo, createTodo, toggleTodo } = todoSlice.actions;

const todos = todoSlice.reducer;
export default todos;

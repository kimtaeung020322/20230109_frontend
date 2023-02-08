// redux toolkit 활용 버전

import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

import { getTodo } from "../api/todos";

export const fetchData = createAsyncThunk("fetchTodo", getTodo);

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    [fetchData.fulfilled()]: (state, action) => {
      return action.payload;
    },
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
    fetchTodo: (_, action) => {
      return action.payload;
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.done = !todo.done;
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (_, action) => {
        return action.payload;
      })
      .addCase(fetchData.pending, () => {
        return [{ id: 1, text: "로딩 중", done: false }];
      })
      .addCase(fetchData.rejected, () => {
        return [{ id: 1, text: "실패", done: false }];
      });
  },
});

export const { removeTodo, createTodo, toggleTodo, fetchTodo } =
  todoSlice.actions;

const todos = todoSlice.reducer;
export default todos;

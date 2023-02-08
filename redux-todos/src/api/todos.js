import axios from "axios";

export const getTodo = async () => {
  let { data } = await axios.get("http://localhost:5000/todos");

  return data;
};

export const postTodo = async () => {};

export const deleteTodo = async () => {};

export const updateToggle = async () => {};

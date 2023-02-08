const initialState = [
  { id: 1, text: "리덕스 배우기", done: true },
  { id: 2, text: "리덕스 응용하기", done: false },
  { id: 3, text: "리덕스로 todos 만들기", done: false },
];

// 액션 타입 정의
const CREATE = "CREATE";
const REMOVE = "REMOVE";
const TOGGLE = "TOGGLE";

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return state.concat({ id: action.id, text: action.text, done: false });
    case REMOVE:
      return state.filter((todo) => todo.id === action.id);
    case TOGGLE:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};

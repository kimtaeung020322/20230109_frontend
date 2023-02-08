// src/reducer/counter.js
// 액션 타입 정의
export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

// 액션 객체를 생성하는 함수.
export function increaseNum() {
  return { type: INCREASE };
}

export const decreaseNum = () => ({ type: DECREASE });

export function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}

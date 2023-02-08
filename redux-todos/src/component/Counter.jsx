import { useDispatch, useSelector } from "react-redux";
import { decreaseNum, increaseNum } from "../reducer/counter";

function Counter() {
  // useSelector의 인자로는 순수함수가 전달되어야한다.
  //      => 관리되고 있는 여러 상태 중 가져올 상태를 "선택"한다.
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch(); // 액션을 전달하는 함수.

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increaseNum())}>+1</button>
      <button onClick={() => dispatch(decreaseNum())}>-1</button>
    </div>
  );
}

export default Counter;

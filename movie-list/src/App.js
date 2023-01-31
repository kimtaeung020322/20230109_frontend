import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState(null);
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const fetchData = () => {
    axios
      .get("http://localhost:5000/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => {
        console.log(err);
        setTodos(null);
      });
  };

  useEffect(() => {
    // 화면에 나타나자마자 한번만 실행.
    fetchData();
  }, []);

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/todos", {
        text: text,
        done: false,
      })
      .then((res) => {
        // 등록에 성공하면 데이터 다시 받아오기
        // if(res.)
        console.log(res);
        if (res.status === 201) alert("할일이 등록되었습니다.");
        fetchData();
      });
  };

  const handleToggle = (id, done) => {
    axios
      .patch("http://localhost:5000/todos/" + id, {
        done,
      })
      .then((res) => {
        fetchData();
      });
  };

  const handleRemove = (id) => {
    axios.delete("http://localhost:5000/todos/" + id).then((res) => {
      fetchData();
    });
  };

  if (!todos) return <div>데이터가 없습니다.</div>;

  return (
    <div>
      <div>
        <input type="text" onChange={handleText} />
        <button onClick={handleSubmit}>등록</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done && "line-through" }}
          >
            <span onClick={() => handleToggle(todo.id, !todo.done)}>
              {todo.text}
            </span>
            <button onClick={() => handleRemove(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

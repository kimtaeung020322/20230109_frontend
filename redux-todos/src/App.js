import { useState } from "react";
import Counter from "./component/Counter";
import Todos from "./component/Todos";

function App() {
  const [input, setInput] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e)} />
      <Todos />
    </div>
  );
}

export default App;

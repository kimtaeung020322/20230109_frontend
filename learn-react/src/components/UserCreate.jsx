import { useEffect, useRef, useState } from "react";

const initialInputs = {
  email: "",
  name: "",
};

function UserCreate({ onChange }) {
  const [inputs, setInputs] = useState(initialInputs);
  const { email, name } = inputs;

  const inputRef = useRef();

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleReset = () => {
    setInputs(initialInputs);
    inputRef.current.focus();
  };

  const handleSubmit = () => {
    onChange(name, email);
    handleReset();
  };

  useEffect(() => {
    console.log("render!");
  });

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleInputs}
        ref={inputRef}
      />
      <input type="text" name="email" value={email} onChange={handleInputs} />
      <button onClick={handleSubmit}>등록</button>
      <button onClick={handleReset}>초기화</button>
    </div>
  );
}

export default UserCreate;

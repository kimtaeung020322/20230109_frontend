import { useState } from "react";

const initialState = [
  { id: 1, name: "hbs9312", email: "hbs9312@gmail.com" },
  { id: 2, name: "hasdlk23412", email: "test93@gmail.com" },
  { id: 3, name: "test_user", email: "cocacola@gmail.com" },
];

const initialInputs = {
  email: "",
  username: "",
};

function UserList() {
  const [userList, setUserList] = useState(initialState);
  const [inputs, setInputs] = useState(initialInputs);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  console.log(inputs);
  return (
    <div>
      <div>
        <input
          type="text"
          name="username"
          value={inputs.username}
          onChange={handleInputs}
        />
        <input
          type="text"
          name="email"
          value={inputs.email}
          onChange={handleInputs}
        />
      </div>
      <ul>
        {userList.map((user) => (
          <li>
            {user.name}({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

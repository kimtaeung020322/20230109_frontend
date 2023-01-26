import { useState } from "react";

const initialState = [
  { id: 1, name: "hbs9312", email: "hbs9312@gmail.com" },
  { id: 2, name: "hasdlk23412", email: "test93@gmail.com" },
  { id: 3, name: "test_user", email: "cocacola@gmail.com" },
];

function UserList() {
  const [userList, setUserList] = useState(initialState);

  return (
    <div>
      <div>
        <input type="text" />
        <input type="text" />
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

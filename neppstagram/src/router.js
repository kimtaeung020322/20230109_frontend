import { Route, Routes } from "react-router-dom";
import Home from "./component/page/Home";
import Login from "./component/page/Login";
import SignUp from "./component/page/SignUp";

export const Router = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />

      <Route path="home" element={<Home />} />
    </Routes>
  );
};

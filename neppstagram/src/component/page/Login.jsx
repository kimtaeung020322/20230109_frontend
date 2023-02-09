import styled from "styled-components";
import LoginForm from "../login/LoginForm";

// src/component/page/Login.jsx
function Login() {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default Login;

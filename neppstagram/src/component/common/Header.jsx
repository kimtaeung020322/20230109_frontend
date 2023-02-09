import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Wrapper>
        <h1>Neppstagram</h1>
      </Wrapper>
    </Container>
  );
}

const Container = styled.header`
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bd_Color};
  padding: 10px 0;
`;

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

export default Header;

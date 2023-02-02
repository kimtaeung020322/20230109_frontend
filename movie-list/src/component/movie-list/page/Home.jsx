import styled from "styled-components";
import ContentList from "../ContentList";

function Home() {
  return (
    <Container>
      <ContentList title="트렌딩" />
      <ContentList title="What's Popular" />
      <ContentList title="Free to Watch" />
    </Container>
  );
}

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export default Home;

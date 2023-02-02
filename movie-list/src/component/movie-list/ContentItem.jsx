import styled from "styled-components";

function ContentItem() {
  return (
    <Container>
      <ImgBox></ImgBox>
      <Title>영화제목</Title>
      <ReleaseDate>2023.02.02</ReleaseDate>
    </Container>
  );
}

const Container = styled.li`
  line-height: 1rem;
  & + & {
    margin-left: 15px;
  }
`;

const ImgBox = styled.div`
  width: 100px;
  height: 170px;
  background-color: #eee;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin-top: 10px;
`;

const ReleaseDate = styled.span`
  font-size: 0.8rem;
  color: #999;
`;
export default ContentItem;

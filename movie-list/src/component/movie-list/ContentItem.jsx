import styled from "styled-components";

function ContentItem({ item }) {
  const { title, release_date, poster_path } = item;

  const img_url = "https://image.tmdb.org/t/p/w154" + poster_path;
  return (
    <Container>
      <ImgBox>
        <img src={img_url} alt={title} />
      </ImgBox>
      <Title>{title}</Title>
      <ReleaseDate>{release_date}</ReleaseDate>
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

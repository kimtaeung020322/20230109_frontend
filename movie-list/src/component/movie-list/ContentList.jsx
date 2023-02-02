import styled from "styled-components";
import ContentItem from "./ContentItem";
import TitleBox from "./TitleBox";

// component/movie-list/ContentList.jsx
function ContentList({ title }) {
  return (
    <Container>
      <TitleBox title={title} />
      <ItemList>
        <ContentItem />
        <ContentItem />
        <ContentItem />
      </ItemList>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px 0;
`;

const ItemList = styled.ul`
  display: flex;
  margin-top: 20px;
`;

export default ContentList;

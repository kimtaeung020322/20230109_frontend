import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function Section() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleIndex = (e) => {
      e.preventDefault();
      // e.deltaY : 휠 방향에 따라 양수(내림)/음수(올림)
      if (e.deltaY > 0) {
        if (index < 2) setIndex(index + 1);
      } else {
        if (index > 0) setIndex(index - 1);
      }
    };
    // window.scrollTo() : 스크롤바를 움직이는 메서드
    // window.innerHeight : 뷰포트 높이
    window.addEventListener("wheel", handleIndex, { passive: false });

    window.scrollTo({ top: window.innerHeight * index, behavior: "smooth" });
    // 뒷정리 함수
    console.log(window);
    // 다음 렌더링 직전에 실행.
    return () =>
      window.removeEventListener("wheel", handleIndex, { passive: false });
  }, [index]);

  console.log(index);
  return (
    <Container>
      <SectionItem bgColor="red">1</SectionItem>
      <SectionItem bgColor="blue">2</SectionItem>
      <SectionItem bgColor="yellow">3</SectionItem>
    </Container>
  );
}

const Container = styled.div``;

const SectionItem = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 4rem;
  color: #fff;

  height: 100vh;
  background-color: ${({ bgColor }) => bgColor};
`;

export default Section;

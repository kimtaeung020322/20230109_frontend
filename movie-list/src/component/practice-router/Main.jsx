import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import About from "./page/About";
import Home from "./page/Home";
import Post from "./page/Post";

// react-router-dom을 사용하기 위해서 BrowserRouter로 감싸 주어야한다.
function Main() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* path(경로)에 따라 보여줄 element(컴포넌트)를 작성 */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default Main;

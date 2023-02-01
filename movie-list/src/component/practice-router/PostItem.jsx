import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostItem() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  /*
    const fetchData = useCallback(async () => {
      let result = await axios.get("http://localhost:5000/posts/" + postId);

      console.log(result.data);
    }, [postId]);
  */

  useEffect(() => {
    // useCallback()을 사용하면 밖에다 정의해도 된다.
    const fetchData = async () => {
      let result = await axios.get("http://localhost:5000/posts/" + postId);

      setPost(result.data);
    };

    fetchData();
  }, [postId]);

  if (!post) return <div>글이 없습니다.</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default PostItem;

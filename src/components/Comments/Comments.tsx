import { useEffect, useState } from "react";
import api from "../../api/axios";
import { useParams } from "react-router-dom";

const Comments = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const { id } = useParams();

  interface commentInterface {
    user: {username: string};
    content: string;
  }

  useEffect(() => {
    api.get(`/posts/${id}`).then((res) => {
      setIsLoading(false);
      setData(res.data.comments);
      console.log(res.data);
    });
  }, [id]);

  const mapComments = (commentData: commentInterface[]) => {
    if (commentData.length === 0) {
      return <p>No comments</p>;
    }
    return commentData.map((comment, index: number) => (
      <div key={index} className="">
        <p id="user">{comment.user.username}</p>
        <p id="comment">{comment.content}</p>
      </div>
    ));
  };

  return <>{isLoading ? <p>Loading...</p> : 
  <div className="">
    {mapComments(data)}
  </div>
  }</>;
};
export default Comments;

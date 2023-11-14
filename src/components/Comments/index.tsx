import { useEffect, useState } from "react";
import api from "../../api/axios";
import { useParams } from "react-router-dom";

const Comments = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const { id } = useParams();

  interface commentInterface {
    userId: string;
    content: string;
  }

  useEffect(() => {
    api.get(`/comments/post/${id}`).then((res) => {
      setIsLoading(false);
      setData(res.data);
      console.log(res.data);
    });
  }, [id]);

  const mapComments = (commentData: commentInterface[]) => {
    if (commentData.length === 0) {
      return <p>No comments</p>;
    }
    return commentData.map((comment, index: number) => (
      <div key={index} className="p-6 w-64 bg-white border border-gray-200 rounded-lg shadow mt-4">
        <p id="user" className="text-gray-600 text-sm mb-4">{comment.userId}</p>
        <p id="comment">{comment.content}</p>
      </div>
    ));
  };

  return <>{isLoading ? <p>Loading...</p> : 
  <div className="flex flex-col">
    {mapComments(data)}
  </div>
  }</>;
};
export default Comments;

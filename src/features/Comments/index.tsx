import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../../api/axios";

const Comments = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const { id } = useParams();

  interface commentInterface {
    userId: string;
    content: string;
  }

  useEffect(() => {
    apiService.getComments(Number(id))
      .then((res) => {
        setIsLoading(false);
        setData(res);
        console.log(res);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
        setIsLoading(false);
      });
  }, [id]);

  const mapComments = (commentData: commentInterface[]) => {
    if (commentData.length === 0) {
      return <p>No comments</p>;
    }
    return commentData.map((comment, index: number) => (
      <div key={index} className="p-6 w-64 bg-white border border-gray-200 rounded-lg mt-4">
        <p id="user" className="text-gray-600 text-sm mb-4">{comment.userId}</p>
        <p id="comment">{comment.content}</p>
      </div>
    ));
  };

  return <>{isLoading ? <p>Loading...</p> : 
  <div className="flex flex-col w-full">
    <p className="font-main text-2xl pt-4">Comments</p>
    {mapComments(data)}
  </div>
  }</>;
};
export default Comments;

import { useEffect, useState } from "react";
import api from "../../api/axios";
import { useParams } from "react-router-dom";
interface DataProps {
  _id: string;
  title: string;
  pubDate: string;
  content: string;
  author: {
    username: string;
  };
}

const GetPost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [data, setData] = useState<DataProps>({
    _id: "",
    title: "",
    pubDate: "",
    content: "",
    author: { username: "" },
  });

  useEffect(() => {
    api.get(`/posts/${id}`).then((res) => {
      console.log(res.data);
      setData(res.data);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-8 w-64 md:w-3/4">
          <h3 className="text-3xl font-bold mb-4">{data.title}</h3>
          <p className="text-gray-600 text-sm">{new Date(data.pubDate).toLocaleString()} by {data.author.username}</p>
          <p className="mt-4">{data.content}</p>
        </div>
      )}
    </>
  );
};
export default GetPost;

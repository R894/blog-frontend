import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../../../api/axios";

interface DataProps {
  id: string;
  title: string;
  createdAt: string;
  content: string;
  userId: number;
}

const GetPost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [data, setData] = useState<DataProps>({
    id: "",
    title: "",
    createdAt: "",
    content: "",
    userId: 0,
  });

  useEffect(() => {
    apiService.viewPost(Number(id)).then((res) => {
      console.log(res);
      setData(res);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-8 h-64 min-w-[256px] w-3/4">
          <h3 className="text-3xl font-bold mb-4">{data.title}</h3>
          <p className="text-gray-600 text-sm">
            {new Date(data.createdAt).toLocaleString()} by {data.userId}
          </p>
          <p className="mt-4">{data.content}</p>
        </div>
      )}
    </>
  );
};
export default GetPost;

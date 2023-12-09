import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../../../api/axios";
import Comments from "../../Comments";
import CreateComment from "../../Comments/CreateComment";

interface DataProps {
  id: string;
  title: string;
  createdAt: string;
  content: string;
  userId: number;
  imagePath: string;
  userName:string;
}

const GetPost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [data, setData] = useState<DataProps>({
    id: "",
    title: "",
    createdAt: "",
    content: "",
    imagePath: "",
    userId: 0,
    userName: "",
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
        <div className="flex flex-col w-1/2 justify-center items-center">
          {data.imagePath != 'none'? <img src={`http://localhost:4000/static/${data.imagePath}`}/> : null }
          <h3 className="text-3xl font-bold mb-4 font-main text-center">{data.title}</h3>
          <p className="text-gray-600 text-sm text-center">
            {new Date(data.createdAt).toLocaleString()} by {data.userName}
          </p>
          <p className="mt-4">{data.content}</p>
          <Comments/>
          <CreateComment/>
        </div>
      )}
    </>
  );
};
export default GetPost;

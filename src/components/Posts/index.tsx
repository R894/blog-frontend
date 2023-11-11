import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const url = import.meta.env.VITE_API_URL;

interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: number;
  userId: number;
}

const Posts = () => {
  const [data, setData] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${url}/posts`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const reduceString = (str: string, maxLength: number) => {
    if(str.length <= maxLength){
      return str;
    }
    return str.substring(0, maxLength) + "...";
  }

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-3">
          {data.map((item) => (
            <div key={item.id} className="max-w-sm p-6 min-w-fit bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900"><Link to={`/posts/${item.id}`}>{item.title}</Link></h3>
              <p className="text-gray-600 text-sm mb-4">{new Date(item.createdAt).toLocaleString()} by {item.userId}</p>
              <p>{reduceString(item.content, 150)}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Posts;
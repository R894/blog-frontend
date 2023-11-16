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
        setData(res.data.posts);
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
        <p className="text-2xl mb-8 font-bold">Loading...</p>
      ) : (
        <div className="border-b-2">
          <p className="text-2xl mb-8 font-bold">All blog posts</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-7">
            {data.map((item) => (
              <div key={item.id} className="w-80 xl:w-96 h-auto">
                <div className="w-80 xl:w-96 h-60 bg-slate-500 mb-8"></div>
                <p className="text-purple-800 text-sm font-semibold">{new Date(item.createdAt).toLocaleString()} • {item.userId}</p>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-3 my-3"><Link to={`/posts/${item.id}`}>{item.title}</Link></h3>
                <p className=" text-gray-500">{reduceString(item.content, 150)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Posts;

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const url = import.meta.env.VITE_API_URL;

interface Post {
  _id: string;
  title: string;
  content: string;
  pubDate: string;
}

const Posts = () => {
  const [data, setData] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${url}/posts`)
      .then((res) => {
        setData(res.data);
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
            <div key={item._id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900"><Link to={`/posts/${item._id}`}>{item.title}</Link></h3>
              <p>{new Date(item.pubDate).toLocaleString()}</p>
              <p>{reduceString(item.content, 150)}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Posts;

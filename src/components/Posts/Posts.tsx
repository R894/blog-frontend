import { useEffect, useState } from "react";
import PostsCSS from "./posts.module.css";
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
        <div className={PostsCSS.div}>
          {data.map((item) => (
            <div key={item._id} className={PostsCSS.card}>
              <h3><Link to={`/posts/${item._id}`}>{item.title}</Link></h3>
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

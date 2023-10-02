import { useEffect, useState } from "react";
import api from "../../api/axios";
import GetPostCSS from "./getpost.module.css";
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
    });
  }, [id]);

  return (
    <div className={GetPostCSS.card}>
      <h3>{data.title}</h3>
      <p>{new Date(data.pubDate).toLocaleString()}</p>
      <p>{data.author.username}</p>
      <p>{data.content}</p>
    </div>
  );
};
export default GetPost;

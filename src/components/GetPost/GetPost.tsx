import { useEffect, useState } from "react";
import api from "../../api/axios";
import GetPostCSS from './getpost.module.css';
import { useParams } from "react-router-dom";
interface DataProps {
    _id: string;
    title: string;
    pubDate: string;
    content: string;
}

const GetPost = () => {
    const { id } = useParams();
    const [data, setData] = useState<DataProps>({_id:'', title:'', pubDate:'', content:''});

    useEffect(()=> {
        api.get(`/posts/${id}`).then((res) => {
            setData(res.data);
        })
    }, [id])

    return(
        <div className={GetPostCSS.card}>
              <h3>{data.title}</h3>
              <p>{new Date(data.pubDate).toLocaleString()}</p>
              <p>{data.content}</p>
        </div>
    );
};
export default GetPost;

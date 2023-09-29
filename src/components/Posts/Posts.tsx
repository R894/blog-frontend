import { useEffect, useState } from 'react';
import PostsCSS from './posts.module.css';
import axios from 'axios';

const url = import.meta.env.VITE_API_URL;

interface Post {
    _id: string;
    title: string;
    content: string;
}

const Content = () => {
    const [data, setData] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`${url}/posts`)
            .then((res) => {
                setData(res.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            {isLoading ? <p>Loading...</p> : 
                <div className={PostsCSS.div}>
                {data.map((item) => (
                    <div key={item._id} className={PostsCSS.card}>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
            }
        </>
    );
}

export default Content;
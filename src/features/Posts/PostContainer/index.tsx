import { Link } from "react-router-dom";

interface PostProps {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  imagePath: string;
  userId: string;
}

const PostContainer = (PostProps: PostProps) => {
  return (
    <div key={PostProps.id} className="w-80 2xl:w-96 h-auto">
      {PostProps.imagePath !==  'none' ? <img src={`http://localhost:4000/static/${PostProps.imagePath}`}/>: <div className="w-80 2xl:w-96 h-60 bg-neutral-800 mb-8"></div>}
      
      <h3 className="text-2xl tracking-tight text-gray-900 mb-3 my-3 font-main font-bold">
        <Link to={`/posts/${PostProps.id}`}>{PostProps.title}</Link>
      </h3>
      <p className="text-gray-400 text-sm">
        {new Date(PostProps.createdAt).toLocaleString()} • {PostProps.userId}
      </p>

      <p>{reduceString(PostProps.content, 150)}</p>
    </div>
  );
};

const reduceString = (str: string, maxLength: number) => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.substring(0, maxLength) + "...";
};

export default PostContainer;

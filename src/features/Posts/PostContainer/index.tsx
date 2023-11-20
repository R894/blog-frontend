import { Link } from "react-router-dom";

interface PostProps {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  userId: string;
}

const PostContainer = (PostProps: PostProps) => {
  return (
    <div key={PostProps.id} className="w-80 2xl:w-96 h-auto">
      <div className="w-80 2xl:w-96 h-60 bg-slate-500 mb-8"></div>
      <p className="text-purple-800 text-sm font-semibold">
        {new Date(PostProps.createdAt).toLocaleString()} • {PostProps.userId}
      </p>
      <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-3 my-3">
        <Link to={`/posts/${PostProps.id}`}>{PostProps.title}</Link>
      </h3>
      <p className=" text-gray-500">{reduceString(PostProps.content, 150)}</p>
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

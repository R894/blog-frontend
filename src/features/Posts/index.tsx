import { useEffect, useState } from "react";
import apiService from "../../api/axios";
import PostContainer from "./PostContainer";
import Pagination from "../Pagination";

interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  userId: string;
}

const Posts = () => {
  const [data, setData] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState();

  useEffect(() => {
    apiService
      .viewPosts(page)
      .then((res) => {
        setData(res.posts);
        setMaxPage(res.totalPages)
        console.log(res);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [page]);

  return (
    <>
      {isLoading ? (
        <p className="text-2xl mb-8 font-bold">Loading...</p>
      ) : (
        <>
        <div className="border-b-2">
          <p className="text-2xl mb-8 font-bold">All blog posts</p>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-7">
              {data.map((item) => (
                <PostContainer {...item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
        <Pagination currentPage={page} onPageChange={setPage} maxPage={Number(maxPage)}/>
        </>
      )}
    </>
  );
};

export default Posts;

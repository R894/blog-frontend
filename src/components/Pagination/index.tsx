import { useEffect, useState } from "react";

const Pagination = () => {
  const [page, setPage] = useState<number>(1);

  const handleButtonPress = (pageNum: number) => {
    setPage(pageNum);
  };

  const renderPageButton = (pageNum: number) => (
    <div
      key={pageNum}
      className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer select-none ${pageNum === page ? "active bg-purple-200 text-purple-800" : ""}`}
      onClick={() => handleButtonPress(pageNum)}
    >
      {pageNum}
    </div>
  );

  useEffect(() => {
    if (page < 1) {
      setPage(1);
    }
  }, [page]);

  return (
    <div className="flex justify-between w-full pt-5">
      <button onClick={() => handleButtonPress(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <div className="flex">
        {page > 1 && renderPageButton(page - 1)}
        {renderPageButton(page)}
        {renderPageButton(page + 1)}
        {page === 1 && renderPageButton(page+2)}
      </div>
      <button onClick={() => handleButtonPress(page + 1)}>Next</button>
    </div>
  );
};
export default Pagination;

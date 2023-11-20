import { useEffect } from "react";

interface PaginationProps {
  currentPage: number;
  onPageChange: (pageNum: number) => void;
  maxPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onPageChange,
  maxPage
}) => {
  const handleButtonPress = (pageNum: number) => {
    onPageChange(pageNum);
  };

  const renderPageButton = (pageNum: number) => (
    <div
      key={pageNum}
      className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer select-none ${
        pageNum === currentPage ? "active bg-purple-200 text-purple-800" : ""
      }`}
      onClick={() => handleButtonPress(pageNum)}
    >
      {pageNum}
    </div>
  );

  useEffect(() => {
    if (currentPage < 1) {
      onPageChange(1);
    }
  }, [currentPage, onPageChange]);

  return (
    <div className="flex justify-between w-full pt-5">
      <button
        onClick={() => handleButtonPress(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <div className="flex">
        {currentPage > 1 && renderPageButton(currentPage - 1)}
        {currentPage && renderPageButton(currentPage)}
        {currentPage <= maxPage - 1 && renderPageButton(currentPage + 1)}
        {currentPage === 1 && maxPage >= 3 && renderPageButton(currentPage + 2)}
      </div>
      <button onClick={() => handleButtonPress(currentPage + 1)} disabled={currentPage >= maxPage}>Next</button>
    </div>
  );
};
export default Pagination;

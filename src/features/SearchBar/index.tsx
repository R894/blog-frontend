import { FC } from "react";
import SearchIcon from "../../assets/icons/searchicon.png";
interface SearchBarProps {
  placeholder: string;
}

const SearchBar: FC<SearchBarProps> = ({ placeholder }) => {

  return (
    <>
      <div className="flex w-full">
        <input
          placeholder={placeholder}
          className="border border-gray-400 rounded-md border-r-0 rounded-r-none p-2 w-full"
        />
        <button
          type="submit"
          className="border border-gray-400 text-white p-2 rounded-md border-l-0 rounded-l-none w-8"
        >
          <img src={SearchIcon} />
        </button>
      </div>
    </>
  );
};

export default SearchBar;

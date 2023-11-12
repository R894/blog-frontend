import { FC } from "react";

interface SearchBarProps {
    placeholder: string;
}

const SearchBar: FC<SearchBarProps> = ({placeholder}) => {
    return (
      <>
        <div className="flex justify-center">
            <input placeholder={placeholder} className="border border-gray-400 rounded-md border-r-0 rounded-r-none p-2"/>
            <button type="submit" className="bg-blue-600 text-white p-2 rounded-md rounded-l-none">
                <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-10">
            <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                 clip-rule="evenodd" />
            </svg>
            </button>
        </div>
      </>
    );
  };
  
  export default SearchBar;
  
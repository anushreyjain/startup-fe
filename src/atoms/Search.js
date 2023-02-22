import React from "react";
import IcomoonIcon from "../components/IcomoonIcon";

const Search = () => {
  return (
    <div className="w-full py-6 lg:py-10 flex justify-center px-4 lg:px-0">
      <div className="w-full md:w-3/12">
        <div className="relative">
          <input
            type="search"
            className="bg-transparent outline-none border-b border-black w-full pb-2 pl-8"
            placeholder="Type Something"
          />
          <div className="absolute top-0">
            <IcomoonIcon icon={"search"} size="24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

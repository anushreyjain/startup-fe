import React from "react";
import IcomoonIcon from "../components/IcomoonIcon";

const Search = ({ id, name, value, placeholder, ...property }) => {
  return (
    <div className={`w-full py-6 lg:py-10 flex justify-center px-4 lg:px-0 pointer-events-none ${property.className}`}>
      <div className="w-full md:w-3/12">
        <div className="relative">
          <input
            id={id}
            name={name}
            value={value}
            type="search"
            className="bg-transparent outline-none border-b border-primary-400 text-primary-400 w-full pb-2 pl-8"
            placeholder={placeholder}
          />
          <div className="absolute top-0">
            <IcomoonIcon icon={"search"} size="24" color={'#B6B0A8'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

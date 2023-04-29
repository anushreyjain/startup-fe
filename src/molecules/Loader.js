import React from "react";
import { Triangle } from "react-loader-spinner";

const Loader = ({ height, width, ...property }) => {
  return (
    <div
      className={`h-screen w-full flex items-center justify-center ${property.className}`}
    >
      <Triangle
        height={height || "80"}
        width={width || "80"}
        color="#AC916B"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;

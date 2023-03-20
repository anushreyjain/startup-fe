import React from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

const Template404 = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center px-5 lg:px-0">
      <div className="p-10 bg-white flex flex-col items-center rounded-lg lg:w-1/2">
        <div className="w-full mb-20 flex justify-center">
          <img src="/pageNotFound.svg" alt="page not found" />
        </div>
        <Text
          variant=""
          className={"text-2xl text-center lg:text-3xl text-black font-Josefin-Slab"}
          fontWeight="font-semibold"
        >
          Ahh naacho BC, aur kuch nhi hai yha
        </Text>
        <Button type="contained" size={"default"} className="w-fit mt-4">
          Home
        </Button>
      </div>
    </div>
  );
};

export default Template404;

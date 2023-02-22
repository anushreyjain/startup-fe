import React, { useEffect, useRef, useState } from "react";
import Text from "../atoms/Text";
import IcomoonIcon from "../components/IcomoonIcon";
import debounce from "../functions/debounce";

const Card = ({ title, description, likes, status }) => {
  const myRef = useRef();
  const [width, setwidth] = useState("");

  const debounceGetClientWidth = debounce(function getClientWidth() {
    const width = myRef.current?.clientWidth;
    setwidth(width);
  }, 1000);

  useEffect(() => {
    window.addEventListener("resize", debounceGetClientWidth);
  }, []);

  return (
    <div className="p-4 w-full justify-self-center cursor-pointer min-h-[150px] group flex flex-col rounded bg-white hover:drop-shadow-sm active:scale-95 transform transition-all">
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-1">
          <Text
            fontFamily={"font-Josefin-Slab"}
            fontWeight="font-bold"
            className={"text-base md:text-xl"}
            variant=""
          >
            {title}
          </Text>

          <IcomoonIcon
            icon={"bookmark-outline"}
            size="20"
            className="lg:hidden group-hover:block"
          />
        </div>
        <div ref={myRef}>
          <Text
            className={`text-secondary-800 text-sm max-w-[${width}] three-line-clamp flex-grow md:text-base`}
          >
            {description}
          </Text>
        </div>
      </div>
      <div className="flex mt-3 justify-between items-center ">
        <div className="flex-shrink-0 flex space-x-1 items-center">
          <IcomoonIcon icon={"thumb-up-outline"} size="20" />
          <Text variant="" className={"text-xs"}>
            {likes}
          </Text>
        </div>
        <div className="flex space-x-3">
          <IcomoonIcon
            icon={"pencil-square"}
            size="20"
            className="lg:hidden group-hover:block"
          />
          <IcomoonIcon
            icon={"trash"}
            size="20"
            color={"red"}
            className="lg:hidden group-hover:block"
          />
          {status === "approved" ? (
            <IcomoonIcon icon={"check-badge"} size="20" />
          ) : status === "pending" ? (
            <IcomoonIcon icon={"clock"} size="20" />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

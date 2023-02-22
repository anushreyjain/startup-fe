import React from "react";
import Text from "../atoms/Text";
import IcomoonIcon from "../components/IcomoonIcon";
import Card from "../molecules/Card";

const CardsLayout = ({ slangDetails, height, ...property }) => {
  return (
    <div
      style={{ paddingTop: `${height}px` }}
      className={`px-4 md:px-20 flex flex-col space-y-4 md:space-y-0 pb-10 w-full md:grid md:grid-cols-4 md:gap-5 bg-primary-300 ${property.className}`}
    >
      <div className="p-4 w-full justify-self-center min-h-[150px] flex flex-col justify-center space-y-1 items-center rounded bg-white hover:drop-shadow-sm active:scale-95 transform transition-all cursor-pointer">
        <Text
          fontFamily={"font-Josefin-Slab"}
          fontWeight="font-bold"
          className={"text-base md:text-xl"}
          variant=""
        >
          Add a new creativity
        </Text>
        <IcomoonIcon icon={"plus-circle"} size={"56"} />
      </div>

      {slangDetails.map((slang, index) => (
        <Card
          key={index}
          title={slang.title}
          description={slang.description}
          likes={slang.likeCount}
          status={slang.status}
        />
      ))}
    </div>
  );
};

export default CardsLayout;

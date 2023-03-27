import React, { useState } from "react";
import Text from "../atoms/Text";
import IcomoonIcon from "../components/IcomoonIcon";
import Card from "../molecules/Card";
import { getFromPublic } from "../apis/public.api";
import SlangDetailsModal from "./SlangDetailsModal";
import SlangModal from "./SlangModal";
import ProfileCards from "./ProfileCards";

const CardsLayout = ({ slangDetails, activeTab, isAdmin, ...property }) => {
  const [details, setDetails] = useState(null);
  const [newSlang, setNewSlang] = useState(false);
  console.log(slangDetails);
  const openSlangHandler = (id) => {
    getFromPublic({
      query: "getSlang",
      fields: [
        "_id",
        "title",
        "description",
        "likes",
        "usage",
        "additionalInfo",
      ],
      variables: { id },
    })
      .then((res) => {
        if (res.error) {
          throw new Error(res.error);
        }
        setDetails(res);
        console.log(res);
      })
      .catch((err) => {
        console.log("caught an error: ", err.message);
      });

    setDetails(true);
    console.log("clicked", id);
  };

  const handleAddNewSlang = () => {
    setNewSlang(true);
  };

  const closeModal = () => {
    setDetails(null);
    setNewSlang(false);
  };

  return (
    <>
      {newSlang && <SlangModal closeModal={closeModal} />}
      {details && (
        <SlangDetailsModal closeModal={closeModal} details={details} />
      )}
      <div
        className={`px-4 md:px-20 flex flex-col space-y-4 md:space-y-0 pb-10 w-full md:grid md:grid-cols-4 md:gap-5 bg-primary-300 pt-[352px] md:pt-[310px] ${property.className}`}
      >
        {activeTab === "my-creativity" && (
          <div
            onClick={handleAddNewSlang}
            className="p-4 w-full justify-self-center min-h-[150px] flex flex-col justify-center space-y-1 items-center rounded bg-white hover:drop-shadow-sm active:scale-95 transform transition-all cursor-pointer"
          >
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
        )}

        {slangDetails.map((slang, index) => (
          <Card
            slang={slang}
            key={index}
            activeTab={activeTab}
            isAdmin={isAdmin}
            openSlangHandler={() => {
              openSlangHandler(slang._id);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default CardsLayout;

import React, { useState } from "react";
import Text from "../atoms/Text";
import IcomoonIcon from "../components/IcomoonIcon";
import Card from "../molecules/Card";
import { getFromPublic } from "../apis/public.api";
import SlangDetailsModal from "./SlangDetailsModal";
import SlangModal from "./SlangModal";
import ProfileCards from "./ProfileCards";
import { Auth } from "aws-amplify";
import { getFromProtected, postToProtected } from "../apis/protected.api";
import { Navigate } from "react-router-dom";

const CardsLayout = ({
  slangDetails,
  activeTab,
  isAdmin,
  tabHandler,
  modalLoading,
  setModalLoading,
  ...property
}) => {
  const [details, setDetails] = useState(null);
  const [newSlang, setNewSlang] = useState(false);
  const [editSlang, setEditSlang] = useState(false);

  const [slangData, setSlangData] = useState({});

  const openSlangHandler = (id) => {
    setModalLoading(true);
    setDetails(true);
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
        setModalLoading(false);
      })
      .catch((err) => {
        console.log("caught an error: ", err.message);
        setModalLoading(false);
      });
  };

  const handleAddNewSlang = () => {
    setModalLoading(false)
    setNewSlang(true);
    setSlangData({});
  };

  const closeModal = () => {
    setDetails(null);
    setNewSlang(false);
    setEditSlang(false);
  };

  const handleEditSlang = (slang) => {
    setSlangData(slang);
    setEditSlang(true);
  };

  const options = [
    { value: "Agriculture", label: "Agriculture" },
    { value: "Agriculture & Forestry", label: "Agriculture & Forestry" },
    {
      value: "Carbon fixation and abatement",
      label: "Carbon fixation and abatement",
    },
    { value: "Coastal Zones", label: "Coastal Zones" },
    {
      value: "Cross-sectoral Enablers & Approaches",
      label: "Cross-sectoral Enablers & Approaches",
    },
    {
      value: "Early Warning and Environmental Assessment",
      label: "Early Warning and Environmental Assessment",
    },
    { value: "Energy Efficiency", label: "Energy Efficiency" },
    { value: "Forestry", label: "Forestry" },
    { value: "Human Health", label: "Human Health" },
    { value: "Industry", label: "Industry" },
    {
      value: "Infrastructure & Urban Planning",
      label: "Infrastructure & Urban Planning",
    },
    { value: "Marine & Fisheries", label: "Marine & Fisheries" },
    { value: "Renewable Energy", label: "Renewable Energy" },
    { value: "Transport", label: "Transport" },
    { value: "Waste Management", label: "Waste Management" },
    { value: "Water", label: "Water" },
  ];

  const handleDeleteSlang = async (id) => {
    try {
      const authUser = await Auth.currentAuthenticatedUser();
      console.log(authUser);
      const deletedPost = await getFromProtected({
        query: "deleteSlang",
        fields: ["_id"],
        variables: { id },
      });
      closeModal();
      await tabHandler(activeTab);
    } catch (error) {
      console.log(error);
      Navigate("/login", { replace: true });
    }
  };

  const handleApproveSlang = async (slangData) => {
    setModalLoading(true);
    const data = {
      _id: slangData._id,
      title: slangData.title,
      description: slangData.description,
      status: "approved",
    };
    await postToProtected({
      query: "updateSlang",
      fields: ["_id"],
      variables: { data: data },
    });
    setModalLoading(false);
    await tabHandler(activeTab);
  };

  const handleEditFromCard = (id) => {
    console.log(id);
  };

  const msgTabsArr = ["my-creativity", "saved"];
  return (
    <>
      {(newSlang || editSlang) && (
        <SlangModal
          slangData={slangData}
          editSlang={editSlang}
          options={options}
          closeModal={closeModal}
          tabHandler={tabHandler}
          handleDeleteSlang={handleDeleteSlang}
          handleApproveSlang={handleApproveSlang}
          modalLoading={modalLoading}
          setModalLoading={setModalLoading}
        />
      )}

      {details && (
        <SlangDetailsModal
          modalLoading={modalLoading}
          setModalLoading={setModalLoading}
          closeModal={closeModal}
          details={details}
        />
      )}

      <div
        className={`px-4 md:px-20 pt-5 bg-primary-300 overflow-auto h-[calc(100vh-300px)] custom-scrollbar ${property.className}`}
      >
        {msgTabsArr.includes(activeTab) && (
          <div className="mb-5">
            <Text variant="body" className="text-primary-900">
              <strong> NOTE - </strong>
              {activeTab === "my-creativity"
                ? `Slangs which are under review and
              approved will be listed here.`
                : `Slangs which are saved by you will be listed here.`}
            </Text>
          </div>
        )}
        <div className="flex flex-col space-y-4 md:space-y-0 pb-10 w-full md:grid md:grid-cols-4 md:gap-5 bg-primary-300">
          {activeTab === "my-creativity" && (
            <div
              onClick={handleAddNewSlang}
              className="p-4 w-full justify-self-center min-h-[150px] flex flex-col justify-center space-y-1 items-center rounded-2xl bg-white hover:drop-shadow-sm active:scale-95 transform transition-all cursor-pointer"
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

          {activeTab === "profile" && (
            <div className="p-4 w-full justify-self-center min-h-[150px] flex flex-col justify-center space-y-1 items-center rounded-2xl bg-white hover:drop-shadow-sm active:scale-95 transform transition-all cursor-pointer">
              <Text
                fontFamily={"font-Josefin-Slab"}
                fontWeight="font-bold"
                className={"text-base md:text-xl"}
                variant=""
              >
                Coming Soon...
              </Text>
            </div>
          )}

          {activeTab !== "profile" &&
            slangDetails.map((slang, index) => (
              <Card
                tabHandler={tabHandler}
                slang={slang}
                key={index}
                activeTab={activeTab}
                isAdmin={isAdmin}
                allSlangs={slangDetails}
                handleEditFromCard={handleEditFromCard}
                openSlangHandler={() => {
                  openSlangHandler(slang._id);
                }}
                handleEditSlang={handleEditSlang}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default CardsLayout;

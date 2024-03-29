import React, { useEffect, useRef, useState } from "react";
import debounce from "../functions/debounce";
import CardsLayout from "../organism/CardsLayout";
import Header from "../organism/Header";
import { getFromPublic } from "../apis/public.api";
import SlangDetailsModal from "../organism/SlangDetailsModal";
import { getFromProtected } from "../apis/protected.api";
import ProfileCards from "../organism/ProfileCards";
import Loader from "../molecules/Loader";
import LazyLoad from "react-lazy-load";
const Dashboard = ({ user }) => {
  const [activeTab, setActiveTab] = useState("everything");

  const tabs = {
    home: [
      {
        id: 1,
        title: "Everything",
        value: "everything",
      },
      {
        id: 2,
        title: "Trending",
        value: "trending",
      },
    ],
    user: [
      {
        id: 1,
        title: "Everything",
        value: "everything",
      },
      {
        id: 2,
        title: "Trending",
        value: "trending",
      },
      {
        id: 3,
        title: "My Creativity",
        value: "my-creativity",
      },
      {
        id: 4,
        title: "Saved",
        value: "saved",
      },
      {
        id: 5,
        title: "Profile",
        value: "profile",
      },
    ],
    admin: [
      {
        id: 1,
        title: "Everything",
        value: "everything",
      },
      {
        id: 2,
        title: "Trending",
        value: "trending",
      },
      {
        id: 3,
        title: "My Creativity",
        value: "my-creativity",
      },
      {
        id: 4,
        title: "Submission",
        value: "submission",
      },
      {
        id: 5,
        title: "Saved",
        value: "saved",
      },
      {
        id: 6,
        title: "Profile",
        value: "profile",
      },
    ],
  };

  const [tabList, setTabList] = useState([]);

  const [allSlangs, setAllSlangs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modalLoading, setModalLoading] = useState(true);

  const isAdmin =
    user?.signInUserSession?.idToken?.payload["cognito:groups"]?.includes(
      "admin"
    );

  useEffect(() => {
    if (user && isAdmin) {
      setTabList(tabs.admin);
    } else if (user && !isAdmin) {
      setTabList(tabs.user);
    } else {
      setTabList(tabs.home);
    }
  }, [isAdmin]);

  const tabHandler = async (value, loading = true) => {
    try {
      setLoading(loading);
      setActiveTab(value);
      let res;
      switch (value) {
        case "trending":
          res = await getFromPublic({
            query: "getTrending",
            fields: [
              "_id",
              "title",
              "description",
              "likes",
              "bookmarked",
              "liked",
            ],
            variables: {},
          });
          setAllSlangs(res);
          setLoading(false);
          break;

        case "everything":
          res = await getFromPublic({
            query: "getEverything",
            fields: [
              "_id",
              "title",
              "description",
              "likes",
              "bookmarked",
              "liked",
            ],
            variables: {},
          });
          setAllSlangs(res);
          setLoading(false);
          break;

        case "my-creativity":
          res = await getFromProtected({
            query: "getUserSlangs",
            fields: [
              "_id",
              "title",
              "description",
              "likes",
              "status",
              "bookmarked",
              "liked",
            ],
            variables: {},
          });
          setAllSlangs(res);
          setLoading(false);
          break;

        case "saved":
          res = await getFromProtected({
            query: "getSavedSlangs",
            fields: [
              "_id",
              "title",
              "description",
              "likes",
              "bookmarked",
              "liked",
            ],
            variables: {},
          });
          setAllSlangs(res);
          setLoading(false);
          break;

        case "submission":
          res = await getFromProtected({
            query: "getSubmissions",
            fields: ["_id", "title", "description", "likes"],
            variables: {},
          });
          setAllSlangs(res);
          setLoading(false);
          break;

        case "profile":
          setLoading(false);
          break;

        default:
          break;
      }
    } catch (error) {
      console.log("caught an error: ", error.message);
    }
  };

  const slangOfTheDay = {
    title: "Coming Soon...",
  };

  useEffect(() => {
    tabHandler("everything");
  }, []);

  return (
    <div className="flex flex-col">
      <Header
        tabs={tabList}
        tabHandler={tabHandler}
        activeTab={activeTab}
        slangOfTheDay={slangOfTheDay}
        user={user}
      />
      {loading ? (
        <Loader placeholderWidth="w-full" placeholderHeight={'h-[calc(100svh-300px)]'} />
      ) : (
        <CardsLayout
          isAdmin={isAdmin}
          activeTab={activeTab}
          slangDetails={allSlangs}
          tabHandler={tabHandler}
          modalLoading={modalLoading}
          setModalLoading={setModalLoading}
        />
      )}
      {/* <ProfileCards /> */}
    </div>
  );
};

export default Dashboard;

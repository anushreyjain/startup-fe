import React, { useEffect, useRef, useState } from "react";
import debounce from "../functions/debounce";
import CardsLayout from "../organism/CardsLayout";
import Header from "../organism/Header";
import { Triangle } from "react-loader-spinner";
import { getFromPublic } from "../apis/public.api";
import SlangDetailsModal from "../organism/SlangDetailsModal";
import { getFromProtected } from "../apis/protected.api";
import ProfileCards from "../organism/ProfileCards";
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

  const [allSlangs, setAllSlangs] = useState([]);

  const tabHandler = async (value) => {
    try {
      setActiveTab(value);
      let res;
      switch (value) {
        case "trending":
          res = await getFromPublic({
            query: "getTrending",
            fields: ["_id", "title", "description", "likes","bookmarked" , "liked"],
            variables: {},
          });
          setAllSlangs(res);
          break;

        case "everything":
          res = await getFromPublic({
            query: "getEverything",
            fields: ["_id", "title", "description", "likes", "bookmarked" , "liked"],
            variables: {},
          });
          console.log(res);
          setAllSlangs(res);
          break;
          

        case "my-creativity":
          res = await getFromProtected({
            query: "getUserSlangs",
            fields: ["_id", "title", "description", "likes", "bookmarked" , "liked"],
            variables: {},
          });
          setAllSlangs(res);
          break;

        case "saved":
          res = await getFromProtected({
            query: "getSavedSlangs",
            fields: ["_id", "title", "description", "likes","bookmarked" , "liked"],
            variables: {},
          });
          setAllSlangs(res);
          break;

        case "submission":
          res = await getFromProtected({
            query: "getSubmissions",
            fields: ["_id", "title", "description", "likes"],
            variables: {},
          });
          setAllSlangs(res);
          break;
        default:
          break;
      }
    } catch (error) {
      console.log("caught an error: ", error.message);
    }
  };

  const slangOfTheDay = {
    title:
      "qSUQH NDAWIDJWAOID AWN DAWIDWAN DNAW  nfise nf dj isedj ise jies jfois jfioesjfiojo",
  };


  useEffect(() => {
    getFromPublic({
      query: "getEverything",
      fields: ["_id", "title", "description", "likes","bookmarked" , "liked"],
      variables: {},
    })
      .then((res) => {
        if (res.error) {
          throw new Error(res.error);
        }
        setAllSlangs(res);
      })
      .catch((err) => {
        console.log("caught an error: ", err.message);
      });
  }, []);


  console.log("dashboard",tabHandler);

  return (
    <div>
      <Header
        tabs={tabList}
        tabHandler={tabHandler}
        activeTab={activeTab}
        slangOfTheDay={slangOfTheDay}
        user={user}
      />

      <CardsLayout
        isAdmin={isAdmin}
        activeTab={activeTab}
        slangDetails={allSlangs}
        tabHandler={tabHandler}
      />
      {/* <ProfileCards /> */}
    </div>
  );
};

export default Dashboard;

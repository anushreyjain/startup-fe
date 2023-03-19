import React, { useEffect, useRef, useState } from "react";
import debounce from "../functions/debounce";
import CardsLayout from "../organism/CardsLayout";
import Header from "../organism/Header";
import { Triangle } from "react-loader-spinner";
import { getFromPublic } from "../utils/public.api";
import SlangDetailsModal from "../organism/SlangDetailsModal";
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

  const tabHandler = (value) => {
    setActiveTab(value);
    if (value === "trending") {
      getFromPublic({
        query: "getEverything",
        fields: ["_id", "title", "description", "likes"],
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
    }

    if (value === "everything") {
      getFromPublic({
        query: "getEverything",
        fields: ["_id", "title", "description", "likes"],
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
    }
  };

  const slangOfTheDay = {
    title:
      "qSUQH NDAWIDJWAOID AWN DAWIDWAN DNAW  nfise nf dj isedj ise jies jfois jfioesjfiojo",
  };

  const [allSlangs, setAllSlangs] = useState([]);

  useEffect(() => {
    getFromPublic({
      query: "getEverything",
      fields: ["_id", "title", "description", "likes"],
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
      />
    </div>
  );
};

export default Dashboard;

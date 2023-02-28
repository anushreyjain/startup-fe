import React, { useEffect, useRef, useState } from "react";
import debounce from "../functions/debounce";
import CardsLayout from "../organism/CardsLayout";
import Header from "../organism/Header";
import { Triangle } from "react-loader-spinner";
const Dashboard = ({ user }) => {
  const [activeTab, setActiveTab] = useState("everything");
  console.log(activeTab);

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
        value: "Trending",
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
        value: "Trending",
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
        value: "Trending",
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
  };

  const slangOfTheDay = {
    title:
      "qSUQH NDAWIDJWAOID AWN DAWIDWAN DNAW  nfise nf dj isedj ise jies jfois jfioesjfiojo",
  };

  const slangDetails = [
    {
      id: 1,
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: null,
      likeCount: "123",
    },
    {
      id: 2,
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat,Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "pending",
      likeCount: "123",
    },
    {
      id: 3,
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "approved",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "approved",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
    {
      title: "Teri bai ki baarat",
      description:
        "Iska matlab hai teri mummy ki baarat, doosri shadi ki baarat ",
      status: "",
      likeCount: "123",
    },
  ];

  //get dynamic header height
  // const headerRef = useRef();
  // const [height, setHeight] = useState(0);
  // function getClientHeight() {
  //   const finalHeight = headerRef.current?.clientHeight;
  //   console.log(finalHeight);
  //   setHeight(finalHeight.toString());
  // }

  // useEffect(() => {
  //   console.log(headerRef.current.clientHeight);
  //   setHeight(headerRef.current?.clientHeight.toString());
  //   window.addEventListener("resize", getClientHeight);
  // }, []);

  return (
    <div>
      <Header
        tabs={tabList}
        tabHandler={tabHandler}
        activeTab={activeTab}
        slangOfTheDay={slangOfTheDay}
        user={user}
      />

      <CardsLayout isAdmin={isAdmin} activeTab={activeTab} slangDetails={slangDetails} />
    </div>
  );
};

export default Dashboard;
